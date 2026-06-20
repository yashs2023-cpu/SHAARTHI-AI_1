export const TRANSLATIONS = {
  en: {
    // Navigation
    nav: { dashboard: 'Dashboard', aiAssistant: 'AI Assistant', schemes: 'Gov. Schemes', recipes: 'Recipes', community: 'Community', scamShield: 'Scam Shield', switchPersona: 'Switch Persona', logout: 'Logout' },
    
    // Dashboard Shell
    shell: { user: 'User', search: 'Search' },

    // Amma Recipes
    recipes: {
      title: 'Smart Recipe Generator 🍲', subtitle: 'What ingredients do you have? I will tell you what to make!',
      placeholder: 'e.g., potato, tomato, onion', generateBtn: 'Generate Recipe', generating: 'Creating recipe...',
      browseTitle: 'Browse Recipes', all: 'All', north: 'North Indian', south: 'South Indian', snacks: 'Snacks',
      time: 'Time', difficulty: 'Difficulty', servings: 'Servings', calories: 'Calories', ingredients: 'Ingredients', steps: 'Steps', tip: 'Saarthi Tip',
      listen: 'Listen',
      defaultMock: { name: 'Aloo Gobi Masala', time: '25 min', diff: 'Easy', tip: 'Add kasuri methi at the end for restaurant-style flavour!', ing: ['2 Potatoes (cubed)', '1 Cauliflower', '2 Onions', '2 Tomatoes', 'Spices'], steps: ['Heat oil, add cumin seeds', 'Sauté onions until golden', 'Add tomatoes and spices, cook 3 min', 'Add vegetables and 1/4 cup water', 'Cover and simmer 15 min until tender'] }
    },

    // Amma Schemes
    schemes: {
      title: 'Government Schemes & Benefits 🏛️', subtitle: 'Find and apply for welfare schemes you are eligible for',
      searchPlaceholder: 'Search schemes...',
      browseTitle: 'Available Schemes',
      benefit: 'Benefit', eligibility: 'Eligibility', howToApply: 'How to Apply', documents: 'Documents Required', deadline: 'Deadline', applyNow: 'Apply Now', listen: 'Listen',
      cats: { all: 'All Schemes', agriculture: '🌾 Agriculture', health: '🏥 Health', employment: '👷 Employment', women: '👩 Women', housing: '🏠 Housing', energy: '🔥 Energy' },
      defaultMock: [
        { id: 1, category: 'agriculture', icon: '🌾', name: 'PM-Kisan Samman Nidhi', benefit: '₹6,000/year', description: 'Direct income support to farmers for seeds, fertilizers, and equipment.', eligibility: 'Small & marginal farmers with up to 2 hectares', howToApply: 'Online at pmkisan.gov.in or nearest CSC center', documents: ['Aadhaar Card', 'Bank Passbook', 'Land Certificate'], deadline: 'Ongoing', tag: 'Agriculture', applicationUrl: 'https://pmkisan.gov.in/' },
        { id: 2, category: 'women', icon: '👩', name: 'PM Matru Vandana Yojana', benefit: '₹5,000 cash assistance', description: 'Maternity benefit for pregnant women and nursing mothers.', eligibility: 'Pregnant/nursing women, 1st child, 19+ years', howToApply: 'Register at anganwadi center or health facility', documents: ['Aadhaar', 'MCP Card', 'Bank Account'], deadline: 'Within 270 days of pregnancy', tag: 'Women', applicationUrl: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana' }
      ]
    },

    // Scam Shield
    scam: {
      title: 'Scam Shield 🛡️', subtitle: 'Protect yourself from online fraud. Paste a message or link below.',
      placeholder: 'Paste SMS, WhatsApp message, or URL here...',
      checkBtn: 'Check for Safety', checking: 'Analyzing...',
      types: { sms: 'SMS', whatsapp: 'WhatsApp', upi: 'UPI / Payment', url: 'URL / Link', email: 'Email' },
      resultTitle: 'Analysis Result', riskScore: 'Risk Score', recommended: 'Recommended Action', why: 'Why is this flagged?'
    },

    // Community
    community: {
      title: 'Community & SHGs 👥', subtitle: 'Connect with women\'s groups, earn income, and grow together',
      browse: 'Browse Groups', start: 'Start New Group',
      members: 'members', meetings: 'Meetings', location: 'Location', fee: 'Fee', join: 'Join Group', contact: 'Contact',
      formTitle: '🚀 Start Your Own Group', formDesc: 'Build a community with your neighbors to share resources, skills and grow together.',
      gName: 'Group Name', focus: 'Focus Area', loc: 'Location', phone: 'Contact Number', createBtn: '🚀 Create Group',
      defaultMock: [
        { id: 1, name: 'Mahila Mandal — West Ward', leader: 'Mrs. Lakshmi Sharma', members: 45, focus: 'Women Empowerment & Skill Training', meetings: 'Every Tuesday 2 PM', location: 'Community Center, Block A', fee: '₹50/month', activities: ['Stitching Classes', 'Financial Literacy', 'Health Camps'], phone: '9876543210', color: '#FF9933' }
      ]
    }
  },
  hi: {
    nav: { dashboard: 'डैशबोर्ड', aiAssistant: 'AI असिस्टेंट', schemes: 'सरकारी योजनाएं', recipes: 'रेसिपी', community: 'समुदाय', scamShield: 'स्कैम शील्ड', switchPersona: 'प्रोफ़ाइल बदलें', logout: 'लॉग आउट' },
    shell: { user: 'उपयोगकर्ता', search: 'खोजें' },
    recipes: {
      title: 'स्मार्ट रेसिपी जनरेटर 🍲', subtitle: 'आपके पास क्या सामग्री है? मैं बताऊंगा क्या बनाना है!',
      placeholder: 'उदाहरण: आलू, टमाटर, प्याज', generateBtn: 'रेसिपी बनाएं', generating: 'रेसिपी बन रही है...',
      browseTitle: 'रेसिपी खोजें', all: 'सभी', north: 'उत्तर भारतीय', south: 'दक्षिण भारतीय', snacks: 'स्नैक्स',
      time: 'समय', difficulty: 'कठिनाई', servings: 'परोसें', calories: 'कैलोरी', ingredients: 'सामग्री', steps: 'कदम', tip: 'सारथी टिप',
      listen: 'सुनें',
      defaultMock: { name: 'आलू गोभी मसाला', time: '25 मिनट', diff: 'आसान', tip: 'रेस्टोरेंट जैसे स्वाद के लिए अंत में कसूरी मेथी डालें!', ing: ['2 आलू (कटे हुए)', '1 गोभी', '2 प्याज', '2 टमाटर', 'मसाले'], steps: ['तेल गरम करें, जीरा डालें', 'प्याज को सुनहरा होने तक भूनें', 'टमाटर और मसाले डालें, 3 मिनट पकाएं', 'सब्जियां और 1/4 कप पानी डालें', 'ढककर 15 मिनट तक धीमी आंच पर पकाएं'] }
    },
    schemes: {
      title: 'सरकारी योजनाएं और लाभ 🏛️', subtitle: 'अपने लिए योग्य कल्याणकारी योजनाएं खोजें और आवेदन करें',
      searchPlaceholder: 'योजनाएं खोजें...', browseTitle: 'उपलब्ध योजनाएं',
      benefit: 'लाभ', eligibility: 'पात्रता', howToApply: 'आवेदन कैसे करें', documents: 'आवश्यक दस्तावेज', deadline: 'अंतिम तिथि', applyNow: 'अभी आवेदन करें', listen: 'सुनें',
      cats: { all: 'सभी योजनाएं', agriculture: '🌾 कृषि', health: '🏥 स्वास्थ्य', employment: '👷 रोजगार', women: '👩 महिलाएं', housing: '🏠 आवास', energy: '🔥 ऊर्जा' },
      defaultMock: [
        { id: 1, category: 'agriculture', icon: '🌾', name: 'पीएम-किसान सम्मान निधि', benefit: '₹6,000/वर्ष', description: 'किसानों को बीज, उर्वरक और उपकरण के लिए प्रत्यक्ष आय सहायता।', eligibility: '2 हेक्टेयर तक के छोटे और सीमांत किसान', howToApply: 'pmkisan.gov.in या नजदीकी सीएससी केंद्र पर ऑनलाइन', documents: ['आधार कार्ड', 'बैंक पासबुक', 'भूमि प्रमाण पत्र'], deadline: 'निरंतर', tag: 'कृषि', applicationUrl: 'https://pmkisan.gov.in/' },
        { id: 2, category: 'women', icon: '👩', name: 'पीएम मातृ वंदना योजना', benefit: '₹5,000 नकद सहायता', description: 'गर्भवती महिलाओं और स्तनपान कराने वाली माताओं के लिए मातृत्व लाभ।', eligibility: 'गर्भवती/स्तनपान कराने वाली महिलाएं, पहला बच्चा, 19+ वर्ष', howToApply: 'आंगनवाड़ी केंद्र या स्वास्थ्य सुविधा में पंजीकरण करें', documents: ['आधार', 'एमसीपी कार्ड', 'बैंक खाता'], deadline: 'गर्भावस्था के 270 दिनों के भीतर', tag: 'महिलाएं', applicationUrl: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana' }
      ]
    },
    scam: {
      title: 'स्कैम शील्ड 🛡️', subtitle: 'ऑनलाइन धोखाधड़ी से खुद को बचाएं। नीचे एक संदेश या लिंक पेस्ट करें।',
      placeholder: 'एसएमएस, व्हाट्सएप संदेश या यूआरएल यहां पेस्ट करें...',
      checkBtn: 'सुरक्षा की जांच करें', checking: 'विश्लेषण कर रहा है...',
      types: { sms: 'एसएमएस', whatsapp: 'व्हाट्सएप', upi: 'यूपीआई / भुगतान', url: 'यूआरएल / लिंक', email: 'ईमेल' },
      resultTitle: 'विश्लेषण परिणाम', riskScore: 'जोखिम स्कोर', recommended: 'अनुशंसित कार्रवाई', why: 'इसे क्यों फ़्लैग किया गया?'
    },
    community: {
      title: 'समुदाय और एसएचजी 👥', subtitle: 'महिला समूहों से जुड़ें, आय अर्जित करें और एक साथ बढ़ें',
      browse: 'समूह ब्राउज़ करें', start: 'नया समूह शुरू करें',
      members: 'सदस्य', meetings: 'बैठकें', location: 'स्थान', fee: 'शुल्क', join: 'समूह में शामिल हों', contact: 'संपर्क करें',
      formTitle: '🚀 अपना खुद का समूह शुरू करें', formDesc: 'संसाधनों, कौशल को साझा करने और एक साथ बढ़ने के लिए अपने पड़ोसियों के साथ एक समुदाय बनाएं।',
      gName: 'समूह का नाम', focus: 'फ़ोकस क्षेत्र', loc: 'स्थान', phone: 'संपर्क नंबर', createBtn: '🚀 समूह बनाएं',
      defaultMock: [
        { id: 1, name: 'महिला मंडल — वेस्ट वार्ड', leader: 'श्रीमती लक्ष्मी शर्मा', members: 45, focus: 'महिला सशक्तिकरण और कौशल प्रशिक्षण', meetings: 'हर मंगलवार दोपहर 2 बजे', location: 'सामुदायिक केंद्र, ब्लॉक ए', fee: '₹50/महीना', activities: ['सिलाई कक्षाएं', 'वित्तीय साक्षरता', 'स्वास्थ्य शिविर'], phone: '9876543210', color: '#FF9933' }
      ]
    }
  },
  ta: {
    nav: { dashboard: 'டாஷ்போர்டு', aiAssistant: 'AI உதவியாளர்', schemes: 'அரசு திட்டங்கள்', recipes: 'சமையல்', community: 'சமூகம்', scamShield: 'மோசடி தடுப்பு', switchPersona: 'சுயவிவரத்தை மாற்று', logout: 'வெளியேறு' },
    shell: { user: 'பயனர்', search: 'தேடல்' },
    recipes: {
      title: 'ஸ்மார்ட் ரெசிபி ஜெனரேட்டர் 🍲', subtitle: 'உங்களிடம் என்ன பொருட்கள் உள்ளன? என்ன செய்வது என்று சொல்கிறேன்!',
      placeholder: 'உ.ம்: உருளைக்கிழங்கு, தக்காளி, வெங்காயம்', generateBtn: 'செய்முறையை உருவாக்கு', generating: 'உருவாக்கப்படுகிறது...',
      browseTitle: 'செய்முறைகளை தேடு', all: 'அனைத்தும்', north: 'வட இந்திய', south: 'தென்னிந்திய', snacks: 'சிற்றுண்டி',
      time: 'நேரம்', difficulty: 'கடினம்', servings: 'பரிமாறல்கள்', calories: 'கலோரிகள்', ingredients: 'பொருட்கள்', steps: 'படிகள்', tip: 'சாரதி குறிப்பு',
      listen: 'கேளுங்கள்',
      defaultMock: { name: 'ஆலு கோபி மசாலா', time: '25 நிமிடம்', diff: 'எளிதானது', tip: 'உணவக சுவைக்காக இறுதியில் கசூரி மேத்தியைச் சேர்க்கவும்!', ing: ['2 உருளைக்கிழங்கு', '1 காலிபிளவர்', '2 வெங்காயம்', '2 தக்காளி', 'மசாலா'], steps: ['எண்ணெயை சூடாக்கி சீரகம் சேர்க்கவும்', 'வெங்காயத்தை பொன்னிறமாகும் வரை வதக்கவும்', 'தக்காளி மற்றும் மசாலா சேர்த்து 3 நிமிடம் சமைக்கவும்', 'காய்கறிகள் மற்றும் தண்ணீர் சேர்க்கவும்', '15 நிமிடம் மூடி வேகவைக்கவும்'] }
    },
    schemes: {
      title: 'அரசு திட்டங்கள் மற்றும் நன்மைகள் 🏛️', subtitle: 'நீங்கள் தகுதியுள்ள திட்டங்களை கண்டுபிடித்து விண்ணப்பிக்கவும்',
      searchPlaceholder: 'திட்டங்களை தேடு...', browseTitle: 'கிடைக்கக்கூடிய திட்டங்கள்',
      benefit: 'நன்மை', eligibility: 'தகுதி', howToApply: 'விண்ணப்பிப்பது எப்படி', documents: 'தேவையான ஆவணங்கள்', deadline: 'கடைசி தேதி', applyNow: 'இப்போதே விண்ணப்பிக்கவும்', listen: 'கேளுங்கள்',
      cats: { all: 'அனைத்து திட்டங்கள்', agriculture: '🌾 விவசாயம்', health: '🏥 சுகாதாரம்', employment: '👷 வேலைவாய்ப்பு', women: '👩 பெண்கள்', housing: '🏠 வீட்டு வசதி', energy: '🔥 ஆற்றல்' },
      defaultMock: [
        { id: 1, category: 'agriculture', icon: '🌾', name: 'PM-Kisan Samman Nidhi', benefit: '₹6,000/ஆண்டு', description: 'விவசாயிகளுக்கு நேரடி வருமான ஆதரவு.', eligibility: '2 ஹெக்டேர் வரை உள்ள சிறு விவசாயிகள்', howToApply: 'ஆன்லைனில் அல்லது CSC மையம்', documents: ['ஆதார்', 'வங்கி புத்தகம்', 'நில சான்றிதழ்'], deadline: 'தொடர்ந்து', tag: 'விவசாயம்', applicationUrl: 'https://pmkisan.gov.in/' },
        { id: 2, category: 'women', icon: '👩', name: 'PM Matru Vandana Yojana', benefit: '₹5,000 உதவி', description: 'கர்ப்பிணி பெண்களுக்கு மகப்பேறு நன்மை.', eligibility: 'கர்ப்பிணி பெண்கள், 19+ வயது', howToApply: 'அங்கன்வாடி மையத்தில் பதிவு செய்யவும்', documents: ['ஆதார்', 'வங்கி கணக்கு'], deadline: '270 நாட்களுக்குள்', tag: 'பெண்கள்', applicationUrl: 'https://wcd.nic.in/' }
      ]
    },
    scam: {
      title: 'மோசடி தடுப்பு 🛡️', subtitle: 'ஆன்லைன் மோசடியிலிருந்து பாதுகாக்கவும். ஒரு செய்தி அல்லது இணைப்பை ஒட்டவும்.',
      placeholder: 'SMS, WhatsApp செய்தி அல்லது URL ஐ இங்கே ஒட்டவும்...',
      checkBtn: 'பாதுகாப்பை சரிபார்க்கவும்', checking: 'பகுப்பாய்வு...',
      types: { sms: 'SMS', whatsapp: 'WhatsApp', upi: 'UPI', url: 'URL / இணைப்பு', email: 'மின்னஞ்சல்' },
      resultTitle: 'பகுப்பாய்வு முடிவு', riskScore: 'ஆபத்து மதிப்பெண்', recommended: 'பரிந்துரைக்கப்பட்ட செயல்', why: 'இது ஏன் கொடியிடப்பட்டுள்ளது?'
    },
    community: {
      title: 'சமூகம் மற்றும் SHG 👥', subtitle: 'பெண்கள் குழுக்களுடன் இணைக்கவும், வருமானம் ஈட்டவும்',
      browse: 'குழுக்களைத் தேடு', start: 'புதிய குழுவைத் தொடங்கு',
      members: 'உறுப்பினர்கள்', meetings: 'கூட்டங்கள்', location: 'இடம்', fee: 'கட்டணம்', join: 'குழுவில் சேர்', contact: 'தொடர்பு கொள்',
      formTitle: '🚀 உங்கள் சொந்த குழுவைத் தொடங்கவும்', formDesc: 'வளங்களைப் பகிர்ந்து கொள்ள ஒரு சமூகத்தை உருவாக்குங்கள்.',
      gName: 'குழு பெயர்', focus: 'கவனம் செலுத்தும் பகுதி', loc: 'இடம்', phone: 'தொடர்பு எண்', createBtn: '🚀 குழுவை உருவாக்கு',
      defaultMock: [
        { id: 1, name: 'மகிளா மண்டல் — மேற்கு வார்டு', leader: 'திருமதி லட்சுமி', members: 45, focus: 'பெண்கள் மேம்பாடு', meetings: 'செவ்வாய் 2 PM', location: 'சமூக மையம்', fee: '₹50/மாதம்', activities: ['தையல்', 'நிதி', 'சுகாதாரம்'], phone: '9876543210', color: '#FF9933' }
      ]
    }
  },
  te: {
    nav: { dashboard: 'డాష్‌బోర్డ్', aiAssistant: 'AI అసిస్టెంట్', schemes: 'ప్రభుత్వ పథకాలు', recipes: 'వంటకాలు', community: 'కమ్యూనిటీ', scamShield: 'స్కామ్ షీల్డ్', switchPersona: 'ప్రొఫైల్ మార్చండి', logout: 'లాగ్అవుట్' },
    shell: { user: 'వినియోగదారు', search: 'శోధన' },
    recipes: {
      title: 'స్మార్ట్ రెసిపీ జనరేటర్ 🍲', subtitle: 'మీ వద్ద ఏ పదార్థాలు ఉన్నాయి? నేను మీకు ఏమి చేయాలో చెబుతాను!',
      placeholder: 'ఉదాహరణ: బంగాళాదుంప, టమోటా, ఉల్లిపాయ', generateBtn: 'రెసిపీని సృష్టించండి', generating: 'సృష్టిస్తోంది...',
      browseTitle: 'వంటకాలను బ్రౌజ్ చేయండి', all: 'అన్నీ', north: 'ఉత్తర భారత', south: 'దక్షిణ భారత', snacks: 'స్నాక్స్',
      time: 'సమయం', difficulty: 'కష్టం', servings: 'వడ్డించేవి', calories: 'క్యాలరీలు', ingredients: 'పదార్థాలు', steps: 'దశలు', tip: 'సారథి చిట్కా',
      listen: 'వినండి',
      defaultMock: { name: 'ఆలూ గోబీ మసాలా', time: '25 నిమిషాలు', diff: 'సులభం', tip: 'రుచి కోసం చివరలో కసూరి మేతి వేయండి!', ing: ['2 బంగాళాదుంపలు', '1 కాలీఫ్లవర్', '2 ఉల్లిపాయలు', '2 టమోటాలు', 'మసాలా'], steps: ['నూనె వేడి చేసి జీలకర్ర వేయండి', 'ఉల్లిపాయలు వేయించండి', 'టమోటాలు మరియు మసాలా వేయండి', 'కూరగాయలు మరియు నీరు వేయండి', '15 నిమిషాలు ఉడికించండి'] }
    },
    schemes: {
      title: 'ప్రభుత్వ పథకాలు మరియు ప్రయోజనాలు 🏛️', subtitle: 'మీరు అర్హులైన పథకాలను కనుగొనండి',
      searchPlaceholder: 'పథకాలను శోధించండి...', browseTitle: 'అందుబాటులో ఉన్న పథకాలు',
      benefit: 'ప్రయోజనం', eligibility: 'అర్హత', howToApply: 'ఎలా దరఖాస్తు చేయాలి', documents: 'కావలసిన పత్రాలు', deadline: 'చివరి తేదీ', applyNow: 'ఇప్పుడే దరఖాస్తు చేయండి', listen: 'వినండి',
      cats: { all: 'అన్ని పథకాలు', agriculture: '🌾 వ్యవసాయం', health: '🏥 ఆరోగ్యం', employment: '👷 ఉపాధి', women: '👩 మహిళలు', housing: '🏠 గృహనిర్మాణం', energy: '🔥 శక్తి' },
      defaultMock: [
        { id: 1, category: 'agriculture', icon: '🌾', name: 'PM-Kisan Samman Nidhi', benefit: '₹6,000/సంవత్సరం', description: 'రైతులకు ఆదాయ మద్దతు.', eligibility: '2 హెక్టార్ల వరకు ఉన్న చిన్న రైతులు', howToApply: 'ఆన్‌లైన్ లేదా CSC కేంద్రం', documents: ['ఆధార్', 'బ్యాంకు పుస్తకం', 'భూమి ధృవీకరణ పత్రం'], deadline: 'కొనసాగుతోంది', tag: 'వ్యవసాయం', applicationUrl: 'https://pmkisan.gov.in/' },
        { id: 2, category: 'women', icon: '👩', name: 'PM Matru Vandana Yojana', benefit: '₹5,000 సహాయం', description: 'గర్భిణీ స్త్రీలకు ప్రయోజనం.', eligibility: 'గర్భిణీ స్త్రీలు, 19+ సంవత్సరాలు', howToApply: 'అంగన్‌వాడీ కేంద్రంలో నమోదు చేయండి', documents: ['ఆధార్', 'బ్యాంకు ఖాతా'], deadline: '270 రోజులలోపు', tag: 'మహిళలు', applicationUrl: 'https://wcd.nic.in/' }
      ]
    },
    scam: {
      title: 'స్కామ్ షీల్డ్ 🛡️', subtitle: 'ఆన్‌లైన్ మోసాల నుండి మిమ్మల్ని మీరు రక్షించుకోండి. సందేశాన్ని ఇక్కడ అతికించండి.',
      placeholder: 'SMS, WhatsApp సందేశం లేదా URL ఇక్కడ అతికించండి...',
      checkBtn: 'భద్రత కోసం తనిఖీ చేయండి', checking: 'విశ్లేషిస్తోంది...',
      types: { sms: 'SMS', whatsapp: 'WhatsApp', upi: 'UPI', url: 'URL', email: 'ఇమెయిల్' },
      resultTitle: 'విశ్లేషణ ఫలితం', riskScore: 'రిస్క్ స్కోర్', recommended: 'సిఫార్సు చేయబడిన చర్య', why: 'ఇది ఎందుకు ఫ్లాగ్ చేయబడింది?'
    },
    community: {
      title: 'కమ్యూనిటీ మరియు SHG 👥', subtitle: 'మహిళా సమూహాలతో కనెక్ట్ అవ్వండి, ఆదాయం సంపాదించండి',
      browse: 'సమూహాలను బ్రౌజ్ చేయండి', start: 'కొత్త సమూహాన్ని ప్రారంభించండి',
      members: 'సభ్యులు', meetings: 'సమావేశాలు', location: 'స్థానం', fee: 'రుసుము', join: 'సమూహంలో చేరండి', contact: 'సంప్రదించండి',
      formTitle: '🚀 మీ స్వంత సమూహాన్ని ప్రారంభించండి', formDesc: 'వనరులను పంచుకోవడానికి సంఘాన్ని నిర్మించండి.',
      gName: 'సమూహం పేరు', focus: 'దృష్టి ప్రాంతం', loc: 'స్థానం', phone: 'సంప్రదింపు సంఖ్య', createBtn: '🚀 సమూహాన్ని సృష్టించండి',
      defaultMock: [
        { id: 1, name: 'మహిళా మండల్ — వెస్ట్ వార్డ్', leader: 'శ్రీమతి లక్ష్మి', members: 45, focus: 'మహిళా సాధికారత', meetings: 'మంగళవారం 2 PM', location: 'కమ్యూనిటీ సెంటర్', fee: '₹50/నెల', activities: ['కుట్టు', 'ఆర్థిక', 'ఆరోగ్యం'], phone: '9876543210', color: '#FF9933' }
      ]
    }
  }
};
