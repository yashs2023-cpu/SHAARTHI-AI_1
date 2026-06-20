import geminiService from './gemini';

// Regex-based fallback patterns
const scamPatterns = {
  sms: [
    { pattern: /verify.*account/i, risk: 'high', type: 'phishing' },
    { pattern: /click.*link.*urgent/i, risk: 'high', type: 'phishing' },
    { pattern: /confirm.*password|otp/i, risk: 'high', type: 'credential_theft' },
    { pattern: /congratulations.*won/i, risk: 'medium', type: 'lottery_scam' },
    { pattern: /update.*payment.*method/i, risk: 'high', type: 'fraud' },
  ],
  whatsapp: [
    { pattern: /job.*opportunity.*easy.*money/i, risk: 'high', type: 'employment_scam' },
    { pattern: /investment.*guaranteed.*returns/i, risk: 'high', type: 'investment_fraud' },
    { pattern: /loan.*approved.*instant/i, risk: 'medium', type: 'loan_scam' },
    { pattern: /free.*gift.*claim/i, risk: 'medium', type: 'giveaway_scam' },
  ],
  upi: [
    { pattern: /money.*pending.*confirm/i, risk: 'high', type: 'pending_transaction' },
    { pattern: /otp.*share|share.*otp/i, risk: 'high', type: 'otp_theft' },
    { pattern: /refund.*pending/i, risk: 'medium', type: 'refund_scam' },
  ],
};

const scamDetectionService = {
  async analyze(message, type, language = 'en') {
    // 1. Try Gemini AI analysis first for intelligent detection
    const aiResult = await geminiService.analyzeScam(message, type, language);
    
    if (aiResult) {
      return {
        ...aiResult,
        type,
        message,
        timestamp: new Date().toISOString()
      };
    }

    // 2. Fallback to Regex if AI fails
    let riskScore = 0;
    let detectedScams = [];
    const patterns = scamPatterns[type] || scamPatterns.sms;

    for (const scam of patterns) {
      if (scam.pattern.test(message)) {
        const riskValue = scam.risk === 'high' ? 30 : 15;
        riskScore += riskValue;
        detectedScams.push({
          type: scam.type,
          risk: scam.risk,
          description: `Detected ${scam.type.replace(/_/g, ' ')}`
        });
      }
    }

    let riskLevel = 'LOW';
    if (riskScore >= 50) riskLevel = 'CRITICAL';
    else if (riskScore >= 30) riskLevel = 'HIGH';
    else if (riskScore >= 15) riskLevel = 'MEDIUM';

    return {
      message,
      type,
      riskScore: Math.min(100, riskScore),
      riskLevel,
      detectedScams,
      suspiciousIndicators: [],
      recommendation: riskScore >= 50 ? 'DO NOT CLICK LINKS OR SHARE INFO' : riskScore >= 30 ? 'Be cautious' : 'Likely safe',
      timestamp: new Date().toISOString()
    };
  },

  getScamTips(category = 'general') {
    const tips = {
      general: [
        '🛡️ Never share OTP with anyone',
        '🔐 Banks never ask for passwords via SMS/email',
        '🚨 Verify unexpected messages with official channels',
        '⚠️ Too good to be true? Probably a scam',
        '📞 Call official number to verify'
      ],
      sms: [
        '✋ Urgent requests from banks = Red flag',
        '🔗 Don\'t click links in unsolicited SMS',
        '🏦 Contact bank using number on card',
        '⏰ Real banks give you time, scammers rush'
      ],
      upi: [
        '🔓 UPI is push-based, not pull-based',
        '⚠️ You are protected only if YOU pushed money',
        '🚫 Never approve transactions you didn\'t initiate',
        '📱 Scammers can access phone but not UPI PIN'
      ],
      whatsapp: [
        '⛔ Job offers with upfront fees = Scam',
        '💰 No investment guarantees returns',
        '🤖 Beware of fake WhatsApp from "relatives"',
        '🚪 Ask strange "relatives" security questions'
      ]
    };

    return tips[category] || tips.general;
  }
};

export default scamDetectionService;
