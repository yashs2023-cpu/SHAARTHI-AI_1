import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '../../hooks/useToast';
import { useLanguage } from '../../contexts/LanguageContext';
import { personaPrompts } from '../../config/personaPrompts';
import VoiceButton from './VoiceButton';
import geminiService from '../../services/gemini';

const GREETINGS = {
  en: {
    amma: '🙏 Namaste! I am your Amma Saarthi. How can I help you today?',
    student: '📚 Hey! I\'m your Student Saarthi. Ready to help with studies, career guidance, and more!',
    senior: '🙏 Namaste! I am your Saarthi. How can I assist you?',
    business: '💼 Good day! I\'m your Business Saarthi. Let\'s grow your business together!'
  },
  hi: {
    amma: '🙏 Namaste! Main aapki Amma Saarthi hoon. Aaj main aapki kaise madad kar sakti hoon?',
    student: '📚 Namaste! Main aapka Student Saarthi hoon. Padhai aur career mein madad ke liye taiyar!',
    senior: '🙏 Namaste! Main aapka Saarthi hoon. Kya main aapki koi madad kar sakta hoon?',
    business: '💼 Namaskar! Main aapka Business Saarthi hoon. Chaliye aapke business ko aage badhayen!'
  },
  ta: {
    amma: '🙏 வணக்கம்! நான் உங்கள் அம்மா சாரதி. இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    student: '📚 வணக்கம்! நான் உங்கள் மாணவர் சாரதி. படிப்பில் உதவ தயார்!',
    senior: '🙏 வணக்கம்! நான் உங்கள் சாரதி. நான் உங்களுக்கு எப்படி உதவலாம்?',
    business: '💼 வணக்கம்! நான் உங்கள் வணிக சாரதி. உங்கள் வணிகத்தை வளர்க்கலாம்!'
  },
  te: {
    amma: '🙏 నమస్తే! నేను మీ అమ్మ సారథిని. ఈ రోజు నేను మీకు ఎలా సహాయపడగలను?',
    student: '📚 నమస్తే! నేను మీ విద్యార్థి సారథిని. చదువులో సహాయం చేయడానికి సిద్ధం!',
    senior: '🙏 నమస్తే! నేను మీ సారథిని. నేను మీకు ఎలా సహాయపడగలను?',
    business: '💼 నమస్తే! నేను మీ వ్యాపార సారథిని. వ్యాపారాన్ని అభివృద్ధి చేద్దాం!'
  }
};

export default function AIChat({ persona, placeholder, suggestedPrompts = [] }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { showToast } = useToast();
  const { language } = useLanguage();
  const personaInfo = personaPrompts[persona] || {};

  // Welcome message on mount or language change
  useEffect(() => {
    const langGreetings = GREETINGS[language] || GREETINGS.en;
    setMessages([{
      id: 1,
      role: 'assistant',
      text: langGreetings[persona] || langGreetings.amma,
      time: new Date(),
    }]);
  }, [persona, language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), role: 'user', text: text.trim(), time: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Build a simple prompt with the persona system context and language instruction
      const systemContext = personaInfo.systemPrompt || '';
      const prompt = `${systemContext}\n\nIMPORTANT: You must respond entirely in the language corresponding to this language code: "${language}".\n\nUser: ${text.trim()}\n\nAssistant:`;

      // Try Gemini, fallback to intelligent local response
      let responseText = '';
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (apiKey) {
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
            }
          );
          const data = await res.json();
          responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        }
      } catch { /* fallback below */ }

      if (!responseText) {
        responseText = getLocalResponse(persona, text.trim(), language);
      }

      const assistantMsg = {
        id: Date.now() + 1,
        role: 'assistant',
        text: responseText,
        time: new Date(),
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      showToast('Could not get a response. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Messages */}
      <div style={styles.messages} aria-live="polite" aria-label="Chat messages">
        {messages.map(msg => (
          <div
            key={msg.id}
            style={{
              ...styles.msgRow,
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            {msg.role === 'assistant' && (
              <div style={styles.assistantAvatar}>🤖</div>
            )}
            <div style={{
              ...styles.bubble,
              ...(msg.role === 'user' ? styles.userBubble : styles.assistantBubble),
            }}>
              <p style={styles.bubbleText}>{msg.text}</p>
              <span style={styles.msgTime}>
                {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ ...styles.msgRow, justifyContent: 'flex-start' }}>
            <div style={styles.assistantAvatar}>🤖</div>
            <div style={{ ...styles.bubble, ...styles.assistantBubble }}>
              <div style={styles.typing}>
                <span /><span /><span />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested prompts */}
      {suggestedPrompts.length > 0 && messages.length <= 1 && (
        <div style={styles.suggestions}>
          {suggestedPrompts.map(p => (
            <button
              key={p}
              style={styles.suggestionChip}
              onClick={() => sendMessage(p)}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Input area */}
      <div style={styles.inputArea}>
        <VoiceButton size={44} persona={persona} onTranscript={text => setInput(text)} />
        <input
          className="saarthi-input"
          style={styles.chatInput}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={placeholder || 'Type or speak your message…'}
          onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
          aria-label="Chat message input"
        />
        <button
          className="btn btn-primary btn-sm"
          style={{ borderRadius: 'var(--r-md)', padding: '10px 18px', flexShrink: 0 }}
          onClick={() => sendMessage(input)}
          disabled={loading || !input.trim()}
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  );
}

function getLocalResponse(persona, text, language) {
  const responses = {
    en: {
      amma: [
        'I understand! Let me check the government schemes for you. PM-Kisan, Ujjwala Yojana, and Ayushman Bharat are available. Which one would you like to see?',
        'Absolutely! For the recipe — which vegetable recipe would you like? I will tell you step-by-step 🍳',
        'For grocery planning, I suggest buying from the local market for fresh produce and buying in bulk for savings 🛒',
      ],
      student: [
        'Great question! For career guidance, first identify your core interests. I can help create a personalized roadmap! 🚀',
        'For study plans, the Pomodoro technique works great. Want me to create a schedule for you? 📚',
        'There are several scholarships available! Which category are you eligible for? 🏅',
      ],
      senior: [
        'I understand. For safety remember — no bank ever asks for OTP. If someone calls and asks for OTP, it is a scam! 🛡️',
        'To set a medicine reminder, go to the Health section. I will remind you of every dose ❤️',
        'In case of emergency, press the SOS button — first inform family, then call the doctor 🆘',
      ],
      business: [
        'For business growth, focus on customer retention and digital presence. Which area do you want to explore? 📊',
        'GST filing: File GSTR-1 by 11th of next month. I can guide you through each step 🏛️',
        'For loan eligibility: maintain 2+ years of ITR and keep credit score above 700. 💰',
      ],
    },
    hi: {
      amma: [
        'Main samajh gayi! Aapke liye government schemes check karte hain. PM-Kisan, Ujjwala Yojana aur Ayushman Bharat available hain.',
        'Bilkul! Recipe ke liye — aap kaunsi sabzi ki recipe chahte hain? Main step-by-step bataungi 🍳',
        'Grocery planning ke liye main suggest karungi ki local market se kharidein for fresh produce 🛒',
      ],
      student: [
        'Badhiya sawaal! Career guidance ke liye apni interests pehchano. Main roadmap banane mein madad karunga! 🚀',
        'Padhai ke liye Pomodoro technique best hai. Kya main schedule banaun? 📚',
        'Bahut saari scholarships hain! Aap kis category mein aate hain? 🏅',
      ],
      senior: [
        'Bilkul, main samajhta hoon. Safety ke liye yaad rakhein — bank kabhi OTP nahi maangta! 🛡️',
        'Medicine reminder ke liye Health section mein jayen. Main yaad dilaunga ❤️',
        'Emergency mein SOS button dabayen — pehle family, phir doctor ko call karein 🆘',
      ],
      business: [
        'Business growth ke liye customer retention par dhyan dein. Kis area ko explore karna chahte hain? 📊',
        'GST filing: Agle mahine ki 11 tareekh tak GSTR-1 file karein 🏛️',
        'Loan ke liye: 2 saal ki ITR aur 700+ credit score rakhein 💰',
      ],
    }
  };

  const langResponses = responses[language] || responses.en;
  const arr = langResponses[persona] || langResponses.amma;
  return arr[Math.floor(Math.random() * arr.length)];
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '70vh',
    minHeight: 400,
    maxHeight: 700,
    background: '#fff',
    borderRadius: 'var(--r-xl)',
    boxShadow: 'var(--shadow-md)',
    border: '1px solid var(--gray-100)',
    overflow: 'hidden',
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px 20px 8px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    scrollBehavior: 'smooth',
  },
  msgRow: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 8,
  },
  assistantAvatar: {
    width: 32, height: 32, borderRadius: '50%',
    background: 'var(--gray-100)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 16, flexShrink: 0,
  },
  bubble: {
    maxWidth: '72%',
    borderRadius: 'var(--r-xl)',
    padding: '12px 16px',
  },
  userBubble: {
    background: 'linear-gradient(135deg, var(--saffron), var(--saffron-dark))',
    color: '#fff',
    borderBottomRightRadius: 4,
  },
  assistantBubble: {
    background: 'var(--gray-50)',
    color: 'var(--gray-800)',
    border: '1px solid var(--gray-200)',
    borderBottomLeftRadius: 4,
  },
  bubbleText: { fontSize: 14, lineHeight: 1.6, margin: 0, whiteSpace: 'pre-wrap' },
  msgTime: {
    display: 'block',
    fontSize: 10,
    opacity: 0.6,
    marginTop: 4,
    textAlign: 'right',
  },
  typing: {
    display: 'flex', gap: 4, padding: '4px 2px',
  },
  suggestions: {
    display: 'flex',
    gap: 8,
    padding: '8px 20px',
    overflowX: 'auto',
    borderTop: '1px solid var(--gray-100)',
    background: 'var(--gray-50)',
  },
  suggestionChip: {
    background: '#fff',
    border: '1px solid var(--gray-200)',
    borderRadius: 'var(--r-full)',
    padding: '6px 14px',
    fontSize: 12,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    color: 'var(--gray-700)',
    transition: 'var(--t-fast)',
    fontWeight: 500,
  },
  inputArea: {
    display: 'flex',
    gap: 8,
    padding: '12px 16px',
    borderTop: '1px solid var(--gray-100)',
    background: '#fff',
    alignItems: 'center',
  },
  chatInput: {
    flex: 1,
    borderRadius: 'var(--r-md)',
    padding: '10px 14px',
    fontSize: 14,
    border: '2px solid var(--gray-200)',
  },
};
