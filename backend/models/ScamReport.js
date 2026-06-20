import mongoose from 'mongoose';

const scamReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  messageType: { type: String, enum: ['sms', 'whatsapp', 'upi', 'url', 'email'], required: true },
  originalMessage: { type: String, required: true },
  riskScore: { type: Number, min: 0, max: 100 },
  riskLevel: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL', 'SAFE', 'SUSPICIOUS', 'DANGEROUS'] },
  detectedScams: [{
    type: { type: String },
    risk: { type: String },
    description: { type: String }
  }],
  suspiciousIndicators: [String],
  recommendation: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('ScamReport', scamReportSchema);
