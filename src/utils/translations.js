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

    // Amma Schemes - ENGLISH
    schemes: {
      title: 'Government Schemes & Benefits 🏛️', subtitle: 'Find and apply for welfare schemes you are eligible for',
      searchPlaceholder: 'Search schemes...',
      browseTitle: 'Available Schemes',
      benefit: 'Benefit', eligibility: 'Eligibility', howToApply: 'How to Apply', documents: 'Documents Required', deadline: 'Deadline', applyNow: 'Apply Now', listen: 'Listen',
      cats: { all: 'All Schemes', agriculture: '🌾 Agriculture', health: '🏥 Health', employment: '👷 Employment', women: '👩 Women', housing: '🏠 Housing', energy: '🔥 Energy' },
      defaultMock: [
        { id: 1, category: 'agriculture', icon: '🌾', name: 'PM-Kisan Samman Nidhi', benefit: '₹6,000/year', description: 'Direct income support to farmers for seeds, fertilizers, and equipment.', eligibility: 'Small & marginal farmers with up to 2 hectares', howToApply: 'Online at pmkisan.gov.in or nearest CSC center', documents: ['Aadhaar Card', 'Bank Passbook', 'Land Certificate'], deadline: 'Ongoing', tag: 'Agriculture', applicationUrl: 'https://pmkisan.gov.in/' },
        { id: 2, category: 'energy', icon: '🔥', name: 'PM Ujjwala Yojana', benefit: 'Free LPG + ₹1,600 subsidy', description: 'Free LPG cooking gas connections to BPL households.', eligibility: 'BPL families without LPG connection', howToApply: 'Visit nearest LPG gas agency with documents', documents: ['Aadhaar', 'BPL Certificate', 'Passport Photo'], deadline: 'Ongoing', tag: 'Energy', applicationUrl: 'https://www.pmuy.gov.in/' },
        { id: 3, category: 'health', icon: '🏥', name: 'Ayushman Bharat', benefit: '₹5 Lakh health insurance', description: 'Free hospitalization and surgery coverage for vulnerable families.', eligibility: 'BPL and APL families on SECC database', howToApply: 'Contact nearest ASHA worker or pmjay.gov.in', documents: ['Aadhaar', 'Ration Card', 'PMJAY Card'], deadline: 'Ongoing', tag: 'Health', applicationUrl: 'https://pmjay.gov.in/' },
        { id: 4, category: 'employment', icon: '👷', name: 'MGNREGA', benefit: '100 days work @ ₹300-350/day', description: 'Guaranteed rural employment for unskilled workers.', eligibility: 'Rural residents 18+ willing to do manual work', howToApply: 'Register at Gram Panchayat office', documents: ['ID Proof', 'Address Proof', 'Job Card Application'], deadline: 'Ongoing', tag: 'Employment', applicationUrl: 'https://nrega.nic.in/' },
        { id: 5, category: 'women', icon: '👩', name: 'PM Matru Vandana Yojana', benefit: '₹5,000 cash assistance', description: 'Maternity benefit for pregnant women and nursing mothers.', eligibility: 'Pregnant/nursing women, 1st child, 19+ years', howToApply: 'Register at anganwadi center or health facility', documents: ['Aadhaar', 'MCP Card', 'Bank Account'], deadline: 'Within 270 days of pregnancy', tag: 'Women', applicationUrl: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana' },
        { id: 6, category: 'housing', icon: '🏠', name: 'PM Awas Yojana (Gramin)', benefit: '₹1.2 Lakh housing assistance', description: 'Affordable housing for rural BPL families.', eligibility: 'Homeless or kutcha house families in rural areas', howToApply: 'Register via Gram Panchayat or pmayg.nic.in', documents: ['Aadhaar', 'BPL Certificate', 'Land Ownership Proof'], deadline: 'Ongoing', tag: 'Housing', applicationUrl: 'https://pmayg.nic.in/' },
        { id: 7, category: 'agriculture', icon: '🌱', name: 'PM Fasal Bima Yojana', benefit: 'Crop Insurance Coverage', description: 'Provides insurance protection against crop failure due to natural calamities.', eligibility: 'All farmers including tenant farmers', howToApply: 'Apply through banks or PMFBY portal', documents: ['Aadhaar', 'Bank Account', 'Land Records'], deadline: 'Before sowing season', tag: 'Agriculture', applicationUrl: 'https://pmfby.gov.in/' },
        { id: 8, category: 'agriculture', icon: '🧪', name: 'Soil Health Card Scheme', benefit: 'Free Soil Testing', description: 'Provides soil health cards with nutrient recommendations.', eligibility: 'All farmers', howToApply: 'Visit agriculture office', documents: ['Aadhaar', 'Land Details'], deadline: 'Ongoing', tag: 'Agriculture', applicationUrl: 'https://soilhealth.dac.gov.in/' },
        { id: 9, category: 'health', icon: '🤱', name: 'Janani Suraksha Yojana', benefit: 'Cash Assistance', description: 'Promotes institutional delivery among pregnant women.', eligibility: 'Pregnant women from eligible households', howToApply: 'Government hospital', documents: ['Aadhaar', 'MCP Card'], deadline: 'Before delivery', tag: 'Health', applicationUrl: 'https://nhm.gov.in/' },
        { id: 10, category: 'health', icon: '💉', name: 'Mission Indradhanush', benefit: 'Free Vaccination', description: 'Provides full immunization coverage for children.', eligibility: 'Children and pregnant women', howToApply: 'Health centers', documents: ['Health Card'], deadline: 'Ongoing', tag: 'Health', applicationUrl: 'https://www.india.gov.in/' },
        { id: 11, category: 'employment', icon: '💼', name: 'PM Mudra Yojana', benefit: 'Loans up to ₹10 Lakh', description: 'Financial support for small businesses.', eligibility: 'Indian citizens with business plans', howToApply: 'Apply through banks', documents: ['Aadhaar', 'PAN'], deadline: 'Ongoing', tag: 'Employment', applicationUrl: 'https://www.mudra.org.in/' },
        { id: 12, category: 'employment', icon: '🎓', name: 'PM Kaushal Vikas Yojana', benefit: 'Free Skill Training', description: 'Skill development for youth.', eligibility: 'Indian youth', howToApply: 'Skill centers', documents: ['Aadhaar'], deadline: 'Ongoing', tag: 'Employment', applicationUrl: 'https://www.pmkvyofficial.org/' },
        { id: 13, category: 'women', icon: '👧', name: 'Sukanya Samriddhi Yojana', benefit: 'High Interest Savings', description: 'Savings scheme for girl child education and marriage.', eligibility: 'Girls below 10 years', howToApply: 'Post Office or Bank', documents: ['Birth Certificate', 'Aadhaar'], deadline: 'Before age 10', tag: 'Women', applicationUrl: 'https://www.indiapost.gov.in/' },
        { id: 14, category: 'women', icon: '🔥', name: 'PM Ujjwala Yojana (Women)', benefit: 'Free LPG Connection', description: 'Provides clean cooking fuel to women.', eligibility: 'Women from BPL families', howToApply: 'LPG Distributor', documents: ['Aadhaar', 'Ration Card'], deadline: 'Ongoing', tag: 'Women', applicationUrl: 'https://www.pmuy.gov.in/' },
        { id: 15, category: 'housing', icon: '🏡', name: 'PM Awas Yojana Urban', benefit: 'Housing Subsidy', description: 'Affordable housing for urban poor.', eligibility: 'EWS/LIG families', howToApply: 'PMAY Portal', documents: ['Aadhaar', 'Income Proof'], deadline: 'Ongoing', tag: 'Housing', applicationUrl: 'https://pmaymis.gov.in/' },
        { id: 16, category: 'housing', icon: '🏘️', name: 'Kerala LIFE Mission', benefit: 'Free Housing', description: 'Housing support for homeless families in Kerala.', eligibility: 'Eligible Kerala residents', howToApply: 'Local Self Government Office', documents: ['Aadhaar', 'Income Certificate'], deadline: 'Ongoing', tag: 'Housing', applicationUrl: 'https://lifemission.kerala.gov.in/' },
        { id: 17, category: 'energy', icon: '☀️', name: 'PM Kusum Scheme', benefit: 'Solar Pump Subsidy', description: 'Solar pumps and renewable energy support.', eligibility: 'Farmers', howToApply: 'State Nodal Agency', documents: ['Aadhaar', 'Land Records'], deadline: 'Ongoing', tag: 'Energy', applicationUrl: 'https://pmkusum.mnre.gov.in/' },
        { id: 18, category: 'energy', icon: '🔋', name: 'Solar Rooftop Scheme', benefit: '40% Subsidy', description: 'Subsidy for residential rooftop solar systems.', eligibility: 'Residential consumers', howToApply: 'National Portal', documents: ['Electricity Bill'], deadline: 'Ongoing', tag: 'Energy', applicationUrl: 'https://solarrooftop.gov.in/' }
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

  // HINDI TRANSLATIONS
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

    // SCHEMES - HINDI
    schemes: {
      title: 'सरकारी योजनाएं और लाभ 🏛️', subtitle: 'अपने लिए योग्य कल्याणकारी योजनाएं खोजें और आवेदन करें',
      searchPlaceholder: 'योजनाएं खोजें...', browseTitle: 'उपलब्ध योजनाएं',
      benefit: 'लाभ', eligibility: 'पात्रता', howToApply: 'आवेदन कैसे करें', documents: 'आवश्यक दस्तावेज', deadline: 'अंतिम तिथि', applyNow: 'अभी आवेदन करें', listen: 'सुनें',
      cats: { all: 'सभी योजनाएं', agriculture: '🌾 कृषि', health: '🏥 स्वास्थ्य', employment: '👷 रोजगार', women: '👩 महिलाएं', housing: '🏠 आवास', energy: '🔥 ऊर्जा' },
      defaultMock: [
        { id: 1, category: 'agriculture', icon: '🌾', name: 'पीएम-किसान सम्मान निधि', benefit: '₹6,000/वर्ष', description: 'किसानों को बीज, उर्वरक और उपकरण के लिए प्रत्यक्ष आय सहायता।', eligibility: '2 हेक्टेयर तक के छोटे और सीमांत किसान', howToApply: 'pmkisan.gov.in पर ऑनलाइन या निकटतम सीएससी केंद्र पर', documents: ['आधार कार्ड', 'बैंक पासबुक', 'भूमि प्रमाण पत्र'], deadline: 'निरंतर', tag: 'कृषि', applicationUrl: 'https://pmkisan.gov.in/' },
        { id: 2, category: 'energy', icon: '🔥', name: 'पीएम उज्ज्वला योजना', benefit: 'मुफ्त एलपीजी + ₹1,600 सब्सिडी', description: 'बीपीएल परिवारों को मुफ्त एलपीजी खाना पकाने की गैस कनेक्शन।', eligibility: 'एलपीजी कनेक्शन के बिना बीपीएल परिवार', howToApply: 'दस्तावेजों के साथ निकटतम एलपीजी गैस एजेंसी पर जाएं', documents: ['आधार', 'बीपीएल प्रमाण पत्र', 'पासपोर्ट फोटो'], deadline: 'निरंतर', tag: 'ऊर्जा', applicationUrl: 'https://www.pmuy.gov.in/' },
        { id: 3, category: 'health', icon: '🏥', name: 'आयुष्मान भारत', benefit: '₹5 लाख स्वास्थ्य बीमा', description: 'कमजोर परिवारों के लिए मुफ्त अस्पताल और सर्जरी कवरेज।', eligibility: 'एसईसीसी डेटाबेस पर बीपीएल और एपीएल परिवार', howToApply: 'निकटतम आशा कार्यकर्ता से संपर्क करें या pmjay.gov.in पर जाएं', documents: ['आधार', 'राशन कार्ड', 'पीएमजेएवाई कार्ड'], deadline: 'निरंतर', tag: 'स्वास्थ्य', applicationUrl: 'https://pmjay.gov.in/' },
        { id: 4, category: 'employment', icon: '👷', name: 'मनरेगा', benefit: '100 दिन का काम @ ₹300-350/दिन', description: 'अकुशल कर्मचारियों के लिए गारंटीकृत ग्रामीण रोजगार।', eligibility: '18+ ग्रामीण निवासी जो मैनुअल काम करने के इच्छुक हों', howToApply: 'ग्राम पंचायत कार्यालय में पंजीकरण करें', documents: ['आईडी प्रमाण', 'पता प्रमाण', 'जॉब कार्ड आवेदन'], deadline: 'निरंतर', tag: 'रोजगार', applicationUrl: 'https://nrega.nic.in/' },
        { id: 5, category: 'women', icon: '👩', name: 'पीएम मातृ वंदना योजना', benefit: '₹5,000 नकद सहायता', description: 'गर्भवती महिलाओं और स्तनपान कराने वाली माताओं के लिए मातृत्व लाभ।', eligibility: 'गर्भवती/स्तनपान कराने वाली महिलाएं, पहला बच्चा, 19+ वर्ष', howToApply: 'आंगनवाड़ी केंद्र या स्वास्थ्य सुविधा में पंजीकरण करें', documents: ['आधार', 'एमसीपी कार्ड', 'बैंक खाता'], deadline: 'गर्भावस्था के 270 दिनों के भीतर', tag: 'महिलाएं', applicationUrl: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana' },
        { id: 6, category: 'housing', icon: '🏠', name: 'पीएम आवास योजना (ग्रामीण)', benefit: '₹1.2 लाख आवास सहायता', description: 'ग्रामीण बीपीएल परिवारों के लिए किफायती आवास।', eligibility: 'ग्रामीण क्षेत्रों में बेघर या कच्चे घर के परिवार', howToApply: 'ग्राम पंचायत के माध्यम से पंजीकरण करें या pmayg.nic.in पर जाएं', documents: ['आधार', 'बीपीएल प्रमाण पत्र', 'भूमि स्वामित्व प्रमाण'], deadline: 'निरंतर', tag: 'आवास', applicationUrl: 'https://pmayg.nic.in/' },
        { id: 7, category: 'agriculture', icon: '🌱', name: 'पीएम फसल बीमा योजना', benefit: 'फसल बीमा कवरेज', description: 'प्राकृतिक आपदाओं से फसल नुकसान के खिलाफ बीमा सुरक्षा प्रदान करती है।', eligibility: 'सभी किसान, किरायेदार किसान सहित', howToApply: 'बैंकों के माध्यम से या पीएमएफबीवाई पोर्टल के माध्यम से आवेदन करें', documents: ['आधार कार्ड', 'बैंक खाता', 'भूमि रिकॉर्ड'], deadline: 'बुवाई से पहले', tag: 'कृषि', applicationUrl: 'https://pmfby.gov.in/' },
        { id: 8, category: 'agriculture', icon: '🧪', name: 'मृदा स्वास्थ्य कार्ड योजना', benefit: 'निःशुल्क मृदा परीक्षण', description: 'पोषक तत्व की सिफारिशों के साथ मृदा स्वास्थ्य कार्ड प्रदान करता है।', eligibility: 'सभी किसान', howToApply: 'कृषि कार्यालय में जाएं', documents: ['आधार', 'भूमि विवरण'], deadline: 'निरंतर', tag: 'कृषि', applicationUrl: 'https://soilhealth.dac.gov.in/' },
        { id: 9, category: 'health', icon: '🤱', name: 'जननी सुरक्षा योजना', benefit: 'नकद सहायता', description: 'गर्भवती महिलाओं में संस्थागत प्रसव को बढ़ावा देता है।', eligibility: 'पात्र परिवारों की गर्भवती महिलाएं', howToApply: 'सरकारी अस्पताल', documents: ['आधार', 'एमसीपी कार्ड'], deadline: 'प्रसव से पहले', tag: 'स्वास्थ्य', applicationUrl: 'https://nhm.gov.in/' },
        { id: 10, category: 'health', icon: '💉', name: 'मिशन इंद्रधनुष', benefit: 'निःशुल्क टीकाकरण', description: 'बच्चों के लिए पूर्ण टीकाकरण कवरेज प्रदान करता है।', eligibility: 'बच्चे और गर्भवती महिलाएं', howToApply: 'स्वास्थ्य केंद्र', documents: ['स्वास्थ्य कार्ड'], deadline: 'निरंतर', tag: 'स्वास्थ्य', applicationUrl: 'https://www.india.gov.in/' },
        { id: 11, category: 'employment', icon: '💼', name: 'पीएम मुद्रा योजना', benefit: '₹10 लाख तक ऋण', description: 'छोटे व्यवसायों के लिए वित्तीय सहायता।', eligibility: 'व्यावसायिक योजनाओं वाले भारतीय नागरिक', howToApply: 'बैंकों के माध्यम से आवेदन करें', documents: ['आधार', 'पैन'], deadline: 'निरंतर', tag: 'रोजगार', applicationUrl: 'https://www.mudra.org.in/' },
        { id: 12, category: 'employment', icon: '🎓', name: 'प्रधानमंत्री कौशल विकास योजना', benefit: 'निःशुल्क कौशल प्रशिक्षण', description: 'युवाओं के लिए कौशल विकास।', eligibility: 'भारतीय युवा', howToApply: 'कौशल केंद्र', documents: ['आधार'], deadline: 'निरंतर', tag: 'रोजगार', applicationUrl: 'https://www.pmkvyofficial.org/' },
        { id: 13, category: 'women', icon: '👧', name: 'सुकन्या समृद्धि योजना', benefit: 'उच्च ब्याज बचत योजना', description: 'बालिका शिक्षा और विवाह के लिए बचत योजना।', eligibility: '10 वर्ष से कम आयु की बालिकाएं', howToApply: 'डाकघर या बैंक', documents: ['जन्म प्रमाण पत्र', 'आधार'], deadline: '10 वर्ष की आयु से पहले', tag: 'महिलाएं', applicationUrl: 'https://www.indiapost.gov.in/' },
        { id: 14, category: 'women', icon: '🔥', name: 'पीएम उज्ज्वला योजना (महिलाएं)', benefit: 'मुफ्त एलपीजी कनेक्शन', description: 'महिलाओं को स्वच्छ खाना पकाने का ईंधन प्रदान करता है।', eligibility: 'बीपीएल परिवारों की महिलाएं', howToApply: 'एलपीजी वितरक', documents: ['आधार', 'राशन कार्ड'], deadline: 'निरंतर', tag: 'महिलाएं', applicationUrl: 'https://www.pmuy.gov.in/' },
        { id: 15, category: 'housing', icon: '🏡', name: 'पीएम आवास योजना शहरी', benefit: 'आवास सब्सिडी', description: 'शहरी गरीबों के लिए किफायती आवास।', eligibility: 'ईडब्ल्यूएस/एलआईजी परिवार', howToApply: 'पीएमएवाई पोर्टल', documents: ['आधार', 'आय प्रमाण'], deadline: 'निरंतर', tag: 'आवास', applicationUrl: 'https://pmaymis.gov.in/' },
        { id: 16, category: 'housing', icon: '🏘️', name: 'केरल लाइफ मिशन', benefit: 'मुफ्त आवास', description: 'केरल में बेघर परिवारों के लिए आवास सहायता।', eligibility: 'पात्र केरल निवासी', howToApply: 'स्थानीय स्वशासन कार्यालय', documents: ['आधार', 'आय प्रमाण पत्र'], deadline: 'निरंतर', tag: 'आवास', applicationUrl: 'https://lifemission.kerala.gov.in/' },
        { id: 17, category: 'energy', icon: '☀️', name: 'पीएम कुसुम योजना', benefit: 'सौर पंप सब्सिडी', description: 'सौर पंप और नवीकरणीय ऊर्जा सहायता।', eligibility: 'किसान', howToApply: 'राज्य नोडल एजेंसी', documents: ['आधार', 'भूमि रिकॉर्ड'], deadline: 'निरंतर', tag: 'ऊर्जा', applicationUrl: 'https://pmkusum.mnre.gov.in/' },
        { id: 18, category: 'energy', icon: '🔋', name: 'सोलर रूफटॉप योजना', benefit: '40% सब्सिडी', description: 'आवासीय रूफटॉप सोलर सिस्टम के लिए सब्सिडी।', eligibility: 'आवासीय उपभोक्ता', howToApply: 'राष्ट्रीय पोर्टल', documents: ['बिजली बिल'], deadline: 'निरंतर', tag: 'ऊर्जा', applicationUrl: 'https://solarrooftop.gov.in/' }
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

  // TAMIL TRANSLATIONS
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

    // SCHEMES - TAMIL
    schemes: {
      title: 'அரசு திட்டங்கள் மற்றும் நன்மைகள் 🏛️', subtitle: 'நீங்கள் தகுதியுள்ள திட்டங்களை கண்டுபிடித்து விண்ணப்பிக்கவும்',
      searchPlaceholder: 'திட்டங்களை தேடு...', browseTitle: 'கிடைக்கக்கூடிய திட்டங்கள்',
      benefit: 'நன்மை', eligibility: 'தகுதி', howToApply: 'விண்ணப்பிப்பது எப்படி', documents: 'தேவையான ஆவணங்கள்', deadline: 'கடைசி தேதி', applyNow: 'இப்போதே விண்ணப்பிக்கவும்', listen: 'கேளுங்கள்',
      cats: { all: 'அனைத்து திட்டங்கள்', agriculture: '🌾 விவசாயம்', health: '🏥 சுகாதாரம்', employment: '👷 வேலைவாய்ப்பு', women: '👩 பெண்கள்', housing: '🏠 வீட்டு வசதி', energy: '🔥 ஆற்றல்' },
      defaultMock: [
        { id: 1, category: 'agriculture', icon: '🌾', name: 'PM-Kisan Samman Nidhi', benefit: '₹6,000/வருடம்', description: 'விவசாயிகளுக்கு விதைகள், உரம் மற்றும் உபகரணங்களுக்கான நேரடி வருமான ஆதரவு।', eligibility: '2 ஹெக்டேர் வரை உள்ள சிறு விவசாயிகள்', howToApply: 'pmkisan.gov.in இல் ஆன்லைனில் அல்லது நெarest CSC மையத்தில்', documents: ['ஆதார் கார்டு', 'வங்கி புத்தகம்', 'நில சான்றிதழ்'], deadline: 'தொடர்ந்து', tag: 'விவசாயம்', applicationUrl: 'https://pmkisan.gov.in/' },
        { id: 2, category: 'energy', icon: '🔥', name: 'PM Ujjwala Yojana', benefit: 'இலவச எல்பीஜி + ₹1,600 சலுகை', description: 'BPL குடும்பங்களுக்கு இலவச LPG சமையல் கேஸ் இணைப்புகள்।', eligibility: 'LPG இணைப்பு இல்லாத BPL குடும்பங்கள்', howToApply: 'ஆவணங்களுடன் நெarest LPG கேஸ் ఏజెన्سी செல்லவும்', documents: ['ஆதார்', 'BPL சான்றிதழ்', 'பாஸ்போர்ட் ஃபோட்டோ'], deadline: 'தொடர்ந்து', tag: 'ஆற்றல்', applicationUrl: 'https://www.pmuy.gov.in/' },
        { id: 3, category: 'health', icon: '🏥', name: 'Ayushman Bharat', benefit: '₹5 லட்சம் ஆரோக்கிய காப்பீடு', description: 'பாதிக்கப்படக்கூடிய குடும்பங்களுக்கான இலவச ஆஸ்பத்திரி மற்றும் அறுவை சிகிత்சை கவரேஜ்।', eligibility: 'SECC தரவுভாண்டியில் BPL மற்றும் APL குடும்பங்கள்', howToApply: 'Nearest ASHA कार्यकर्ता அல்லது pmjay.gov.in உடன் தொடர்பு கொள்ளவும்', documents: ['ஆதார்', 'ரேஷன் கார்டு', 'PMJAY கார்டு'], deadline: 'தொடர்ந்து', tag: 'சுகாதாரம்', applicationUrl: 'https://pmjay.gov.in/' },
        { id: 4, category: 'employment', icon: '👷', name: 'MGNREGA', benefit: '100 நாட்கள் வேலை @ ₹300-350/நாள்', description: 'திறமையற்ற தொழிலாளர்களுக்கான உறுதிசெய்யப்பட்ட கிராமீண வேலைவாய்ப்பு।', eligibility: '18+ கிராமீய வாசிகள் கைmanual வேலை செய்ய விருப்பம்', howToApply: 'Gram Panchayat कार्यालयத்தில் பதிவு செய்யவும்', documents: ['ID ప్రమाණం', 'Address ప్రమाணం', 'வேலை கார்டு விண்ணப்பம்'], deadline: 'தொடர்ந்து', tag: 'வேலைவாய்ப்பு', applicationUrl: 'https://nrega.nic.in/' },
        { id: 5, category: 'women', icon: '👩', name: 'PM Matru Vandana Yojana', benefit: '₹5,000 現금 உதவி', description: 'கர்ப்பிணி பெண்கள் மற்றும் மாபை மாதாக்களுக்கான மகப்பேறு நன்மை।', eligibility: 'கர்ப்பிணி/மாபை மாதாக்கள், 1st பிள்ளை, 19+ வயது', howToApply: 'अंगनवाड़ी மையம் அல்லது स्वाস्थ्य सुविधায் பதிவு செய்யவும்', documents: ['ஆதார்', 'MCP கார்டு', 'வங்கி ఖాতా'], deadline: 'கர్ப్பകाலத்திற்குள் 270 நாட்களுக்குள்', tag: 'பெண்கள்', applicationUrl: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana' },
        { id: 6, category: 'housing', icon: '🏠', name: 'PM Awas Yojana (Gramin)', benefit: '₹1.2 லட்சம் வீட்டு உதவி', description: 'গ্রामীण BPL குடumb்कों के लिए सাশ्रয়ী आवास।', eligibility: 'किराएदार कि०राएदार अलग kuttcha घर कुटुंब सक्टुर областей में निवास करते हैं', howToApply: 'Gram Panchayat मাध्यमे पञ्जिकरण करु अथवा pmayg.nic.in पर जाउ', documents: ['ஆதार்', 'BPL சான்றிதழ்', 'நிலம்소유權 ప్రमाණ'], deadline: 'தொடர்ந்து', tag: 'வீட்டு வசதி', applicationUrl: 'https://pmayg.nic.in/' },
        { id: 7, category: 'agriculture', icon: '🌱', name: 'PM Fasal Bima Yojana', benefit: 'ফসল বीमा कवरेज', description: 'प्राकृतिक दुर्योगের कारणे्य ফসल ব्यর्थ हওয়ার विरुद्ध् बীमा সuरক्षा मुंहैद करता है।', eligibility: 'अद्देदारु रайतुलतो सोह अन्न रैतुलु', howToApply: 'ব্যাংকের মাধ्यমে অথবা PMFBY पोर्टलের মাধ्यमे आবेदन करুन', documents: ['ஆதார் கార్డ్', 'ब్যాంकు ఖాตా', 'భూ రिকॉर్డ్‌लు'], deadline: '्বो्اउ सीজन्े पहले', tag: 'விவசாயம்', applicationUrl: 'https://pmfby.gov.in/' },
        { id: 8, category: 'agriculture', icon: '🧪', name: 'Soil Health Card Scheme', benefit: 'निःशुल्क మట్టি పरीक्षण', description: 'पोषक तत్वे् सिфारिशे के साथ मৃत्तिকा स्वाস्थ्य कार्ड प्रदान करता है।', eligibility: 'সकल कृषक', howToApply: 'कृषि कार्यالय में जाএں', documents: ['ஆதार்', 'ভূमि বिবरण'], deadline: 'તોді्ન्તर', tag: 'వివసायம्', applicationUrl: 'https://soilhealth.dac.gov.in/' },
        { id: 9, category: 'health', icon: '🤱', name: 'Janani Suraksha Yojana', benefit: 'नकद सहायता', description: 'গर्भवती महिलाओं में प्राতिषᾲানिক प्रसव प्रसार प्रচार करता है।', eligibility: 'अयोग्य परिवार से गर्भवती महिला', howToApply: 'सरकारी अस्पत्रीಆ', documents: ['ஆதार்', 'MCP కార్డ్'], deadline: 'प्रসवानिकु मुंदु', tag: 'சுகാथารम्', applicationUrl: 'https://nhm.gov.in/' },
        { id: 10, category: 'health', icon: '💉', name: 'Mission Indradhanush', benefit: 'निःशुल्क टीकाकरण', description: 'पिल्लालु मరణु గర्भिणी महिলालु को पूर्ण टीकाкरण कवरेज प्रदान करता है।', eligibility: 'పిల్లలు మరణు गर्भवती महिलाये', howToApply: 'स्वास्थ्य కেন్द్రാలు', documents: ['स्वास्थ्य कार्ड'], deadline: 'निरंतर', tag: 'सुकाथारम्', applicationUrl: 'https://www.india.gov.in/' },
        { id: 11, category: 'employment', icon: '💼', name: 'PM Mudra Yojana', benefit: '₹10 लक्षम् वरकु रुणालु', description: 'చిన్న వ్యవసాయాల కోసం ఆర్థిక సहాय।', eligibility: 'व्यावसायिक योजनाओं वाले भारतीय নাগрик', howToApply: 'बैंकुळ द्वारा दरখास्तु चेyuan', documents: ['ஆதார్', 'PAN'], deadline: 'निरंतर', tag: 'వेלेవாయ్ప్పు', applicationUrl: 'https://www.mudra.org.in/' },
        { id: 12, category: 'employment', icon: '🎓', name: 'PM Kaushal Vikas Yojana', benefit: 'निःशुल्क कौशल प्रশिक्षण', description: 'युवकलु के लिए कौशल विकास।', eligibility: 'ভारતीय যুबक', howToApply: 'कौशल केंद्र', documents: ['ஆதார்'], deadline: 'निरंतर', tag: 'વેલેવાય්પ్పు', applicationUrl: 'https://www.pmkvyofficial.org/' },
        { id: 13, category: 'women', icon: '👧', name: 'Sukanya Samriddhi Yojana', benefit: 'उच्च ब्याज बचत योजना', description: 'బాలిక విద్య మరణు వివाహం కোसम पसout йoजना।', eligibility: '10 वर्ष से कম आयु की बालिकाएं', howToApply: 'डाकघर या ब్యాంకु', documents: ['జన్మ సার్టिफिക్', 'ஆதार்'], deadline: '10 வயోगां முंदु', tag: 'బालिకెలు', applicationUrl: 'https://www.indiapost.gov.in/' },
        { id: 14, category: 'women', icon: '🔥', name: 'PM Ujjwala Yojana (महिलाएं)', benefit: 'निःशुल्क एलपीजी कनेक्शन', description: 'महिलाओंను స్वచ్ఛ ఖाना पकाने का ईंधन प्रदान करता है।', eligibility: 'बीपीएल परिवारों की महिलाएं', howToApply: 'एलपीजी वितरक', documents: ['ஆதார்', 'ರేషன్ కార్డ్'], deadline: 'निरंतर', tag: 'బాలिకెలు', applicationUrl: 'https://www.pmuy.gov.in/' },
        { id: 15, category: 'housing', icon: '🏡', name: 'PM Awas Yojana Urban', benefit: 'आवास सब्सिडी', description: 'शहरी गरीबों के लिए किफायती आवास।', eligibility: 'EWS/LIG परिवार', howToApply: 'पीएमएवाई पोर्टल', documents: ['ஆதார்', 'ఆదాయ రుజువు'], deadline: 'निरंतर', tag: 'वीट्టु वसैती', applicationUrl: 'https://pmaymis.gov.in/' },
        { id: 16, category: 'housing', icon: '🏘️', name: 'Kerala LIFE Mission', benefit: 'निःशुल्क आवास', description: 'केरल में बेघर परिवारों के लिए आवास सहायता।', eligibility: 'पात्र केरल निवासी', howToApply: 'स्थानीय स्वशासन कार्यालय', documents: ['ஆதார்', 'आय प्रमाण पत्र'], deadline: 'निरंतर', tag: 'வீட्டு వసैती', applicationUrl: 'https://lifemission.kerala.gov.in/' },
        { id: 17, category: 'energy', icon: '☀️', name: 'PM Kusum Scheme', benefit: 'सौर पंप सब्सिडी', description: 'सौर पंप और नवीकरणीय ऊर्जा सहायता।', eligibility: 'किसान', howToApply: 'राज्य नोडल एजेंसी', documents: ['ஆதார்', 'భూ రिকार్డ్‌లు'], deadline: 'निरंतर', tag: 'శక్తि', applicationUrl: 'https://pmkusum.mnre.gov.in/' },
        { id: 18, category: 'energy', icon: '🔋', name: 'Solar Rooftop Scheme', benefit: '40% सब्सिडी', description: 'आवासीय रूफटॉप सोलर सिस्टमের জন्য सब्सिडी।', eligibility: 'आवासीय उपभोक्ता', howToApply: 'राष्ट्रीय पोर्टल', documents: ['विद्यుత్ బిల్లు'], deadline: 'निरंतर', tag: 'శక్తि', applicationUrl: 'https://solarrooftop.gov.in/' }
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
        { id: 1, name: 'மகிளा மண்டல் — மேற்கு வார்டு', leader: 'திருமதி லட்சுமி', members: 45, focus: 'பெண்கள் மேம்பாடு', meetings: 'செவ்வாய் 2 PM', location: 'சமூக மையம்', fee: '₹50/மாதம்', activities: ['தையல்', 'நிதி', 'சுகாதாரம்'], phone: '9876543210', color: '#FF9933' }
      ]
    }
  },

  // TELUGU TRANSLATIONS
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

    // SCHEMES - TELUGU
    schemes: {
      title: 'ప్రభుత్వ పథకాలు మరియు ప్రయోజనాలు 🏛️', subtitle: 'మీరు అర్హులైన పథకాలను కనుగొనండి',
      searchPlaceholder: 'పథకాలను శోధించండి...', browseTitle: 'అందుబాటులో ఉన్న పథకాలు',
      benefit: 'ప్రయోజనం', eligibility: 'అర్హత', howToApply: 'ఎలా దరఖాస్తు చేయాలి', documents: 'కావలసిన పత్రాలు', deadline: 'చివరి తేదీ', applyNow: 'ఇప్పుడే దరఖాస్తు చేయండి', listen: 'వినండి',
      cats: { all: 'అన్ని పథకాలు', agriculture: '🌾 వ్యవసాయం', health: '🏥 ఆరోగ్యం', employment: '👷 ఉపాధి', women: '👩 మహిళలు', housing: '🏠 గృహనిర్మాణం', energy: '🔥 శక్తి' },
      defaultMock: [
        { id: 1, category: 'agriculture', icon: '🌾', name: 'PM-Kisan Samman Nidhi', benefit: '₹6,000/సంవత్సరం', description: 'రైతులకు విత్తనాలు, సారవాహనాలు మరియు పరికరాల కోసం నేరుగా ఆదాయ సహాయం।', eligibility: '2 హెక్టార్ల వరకు ఉన్న చిన్న రైతులు', howToApply: 'pmkisan.gov.in లో ఆన్‌లైన్ లేదా సమీప CSC కేంద్రంలో', documents: ['ఆధార్ కార్డ్', 'బ్యాంకు పేజీ', 'ల్యాండ్ సర్టिфिकेट్'], deadline: 'కొనసాగుతోంది', tag: 'వ్యవసాయం', applicationUrl: 'https://pmkisan.gov.in/' },
        { id: 2, category: 'energy', icon: '🔥', name: 'PM Ujjwala Yojana', benefit: 'ఉచిత LPG + ₹1,600 సబ్సిడీ', description: 'BPL కుటుంబాలకు ఉచిత LPG వంట గ్యాస్ కనెక్షన్‌లు।', eligibility: 'LPG కనెక్షన్ లేని BPL కుటుంబాలు', howToApply: 'పత్రాలతో సమీప LPG గ్యాస్ ఏజెన్సీకి చేరుకోండి', documents: ['ఆధార్', 'BPL సర్టిఫికేట్', 'పాస్‌పోర్ట్ ఫోటో'], deadline: 'కొనసాగుతోంది', tag: 'శక్తి', applicationUrl: 'https://www.pmuy.gov.in/' },
        { id: 3, category: 'health', icon: '🏥', name: 'Ayushman Bharat', benefit: '₹5 లక్ష ఆరోగ్య బీమా', description: 'దుర్బల కుటుంబాల కోసం ఉచిత ఆసుపత్రి మరియు సర్జరీ కవరేజ్।', eligibility: 'SECC డేటాబేస్‌లో BPL మరియు APL కుటుంబాలు', howToApply: 'సమీప ASHA కార్యకర్త లేదా pmjay.gov.in సంపర్కించండి', documents: ['ఆధార్', 'రేషన్ కార్డ్', 'PMJAY కార్డ్'], deadline: 'కొనసాగుతోంది', tag: 'ఆరోగ్యం', applicationUrl: 'https://pmjay.gov.in/' },
        { id: 4, category: 'employment', icon: '👷', name: 'MGNREGA', benefit: '100 రోజుల కామ్ @ ₹300-350/రోజు', description: 'నిష్క్రియ కార్మికులకు హామీ గ్రామీణ ఉద్యోగం।', eligibility: '18+ గ్రామీణ నివాసులు హస్తకళ్ఞ కార్యక్రమం చేయడానికి ఇష్టపడతారు', howToApply: 'గ్రామ పంచాయతి కార్యాలయంలో నమోదు చేయండి', documents: ['ID రుజువు', 'చిరునామా రుజువు', 'జాబ్ కార్డ్ దరఖాస్తు'], deadline: 'కొనసాగుతోంది', tag: 'ఉపాధి', applicationUrl: 'https://nrega.nic.in/' },
        { id: 5, category: 'women', icon: '👩', name: 'PM Matru Vandana Yojana', benefit: '₹5,000 నగదు సహాయం', description: 'గర్భిణీ మహిళలు మరియు తల్లులకు సంతానోత్పత్తి ప్రయోజనం।', eligibility: 'గర్భిణీ/దూధ కరిగిన మహిళలు, 1st పిల్ల, 19+ సంవత్సరాలు', howToApply: 'అంగన్‌వాడీ కేంద్రం లేదా ఆరోగ్య సమస్యలో నమోదు చేయండి', documents: ['ఆధార్', 'MCP కార్డ్', 'బ్యాంకు ఖాతా'], deadline: 'గర్భధారణ నుండి 270 రోజులలో', tag: 'మహిళలు', applicationUrl: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana' },
        { id: 6, category: 'housing', icon: '🏠', name: 'PM Awas Yojana (Gramin)', benefit: '₹1.2 లక్ష గృహ సహాయం', description: 'గ్రామీణ BPL కుటుంబాల కోసం సుaffordable గృహాలు।', eligibility: 'గ్రామీణ ప్రాంతాలలో బాధ్యతారహితమైన లేదా కాచా ఇల్లు కుటుంబాలు', howToApply: 'గ్రామ పంచాయతి ద్వారా నమోదు చేయండి లేదా pmayg.nic.in లో', documents: ['ఆధార్', 'BPL సర్టిఫికేట్', 'భూ యాజమాన్యం రుజువు'], deadline: 'కొనసాగుతోంది', tag: 'గృహం', applicationUrl: 'https://pmayg.nic.in/' },
        { id: 7, category: 'agriculture', icon: '🌱', name: 'PM Fasal Bima Yojana', benefit: 'పంట బీమా కవరేజ్', description: 'ప్రకృతి విపత్తుల కారణంగా పంట వైఫల్యానికి వ్యతిరేకంగా బీమా సంరక్షణ ఇస్తుంది।', eligibility: 'అద్దెదారు రైతులతో సహా అన్ని రైతులు', howToApply: 'బ్యాంకుల ద్వారా లేదా PMFBY పోర్టల్ ద్వారా దరఖాస్తు చేయండి', documents: ['ఆధార్', 'బ్యాంకు ఖాతా', 'భూ రిలिकార్డ్‌లు'], deadline: 'విత్తన season నుండి ముందు', tag: 'వ్యవసాయం', applicationUrl: 'https://pmfby.gov.in/' },
        { id: 8, category: 'agriculture', icon: '🧪', name: 'Soil Health Card Scheme', benefit: 'ఉచిత మట్టి పరీక్ష', description: 'పోషక సిఫారిషలతో నేల ఆరోగ్య కార్డ్‌లను అందిస్తుంది।', eligibility: 'అన్ని రైతులు', howToApply: 'వ్యవసాయ కార్యాలయానికి సందర్శించండి', documents: ['ఆధార్', 'భూ వివరాలు'], deadline: 'కొనసాగుతోంది', tag: 'వ్యవసాయం', applicationUrl: 'https://soilhealth.dac.gov.in/' },
        { id: 9, category: 'health', icon: '🤱', name: 'Janani Suraksha Yojana', benefit: 'నగదు సహాయం', description: 'గర్భిణీ మహిళలలో సంస్థాగత ప్రసవాన్ని ప్రోత్సహిస్తుంది।', eligibility: 'అర్హ కుటుంబాల నుండి గర్భిణీ మహిళలు', howToApply: 'సర్కారు ఆసుపత్రి', documents: ['ఆధార్', 'MCP కార్డ్'], deadline: 'ప్రసవానికి ముందు', tag: 'ఆరోగ్యం', applicationUrl: 'https://nhm.gov.in/' },
        { id: 10, category: 'health', icon: '💉', name: 'Mission Indradhanush', benefit: 'ఉచిత సంప్రదాయం', description: 'పిల్లల కోసం పూర్తి టీకాకరణ కవరేజ్ ఇస్తుంది।', eligibility: 'పిల్లలు మరియు గర్భిణీ మహిళలు', howToApply: 'ఆరోగ్య కేంద్రాలు', documents: ['ఆరోగ్య కార్డ్'], deadline: 'కొనసాగుతోంది', tag: 'ఆరోగ్యం', applicationUrl: 'https://www.india.gov.in/' },
        { id: 11, category: 'employment', icon: '💼', name: 'PM Mudra Yojana', benefit: '₹10 లక్ష వరకు రుణాలు', description: 'చిన్న వ్యవసాయాల కోసం ఆర్థిక సహాయం।', eligibility: 'వ్యాపార ప్రణాళికలతో భారతీయ నాగరికులు', howToApply: 'బ్యాంకుల ద్వారా దరఖాస్తు చేయండి', documents: ['ఆధార్', 'PAN'], deadline: 'కొనసాగుతోంది', tag: 'ఉపాధి', applicationUrl: 'https://www.mudra.org.in/' },
        { id: 12, category: 'employment', icon: '🎓', name: 'PM Kaushal Vikas Yojana', benefit: 'ఉచిత నైపుణ్య శిక్షణ', description: 'యువత కోసం నైపుణ్య అభివృద్ధి।', eligibility: 'భారతీయ యువత', howToApply: 'నైపుణ్య కేంద్రాలు', documents: ['ఆధార్'], deadline: 'కొనసాగుతోంది', tag: 'ఉపాధి', applicationUrl: 'https://www.pmkvyofficial.org/' },
        { id: 13, category: 'women', icon: '👧', name: 'Sukanya Samriddhi Yojana', benefit: 'అధిక వడ్డీ సేవింగ్‌లు', description: 'బాలిక విద్య మరియు వివాహం కోసం పొదుపు పయోజना।', eligibility: '10 సంవత్సరాల కంటే తక్కువ వయస్కుల కూతురులు', howToApply: 'పోస్టల్ కార్యాలయం లేదా బ్యాంకు', documents: ['జన్మ సర్టిఫికేట్', 'ఆధార్'], deadline: '10 సంవత్సరాల వయస్సుకు ముందు', tag: 'మహిళలు', applicationUrl: 'https://www.indiapost.gov.in/' },
        { id: 14, category: 'women', icon: '🔥', name: 'PM Ujjwala Yojana (మహిళలు)', benefit: 'ఉచిత LPG కనెక్షన్', description: 'మహిళలకు శుద్ధ చేయిన వంట ఇంధనం అందిస్తుంది।', eligibility: 'BPL కుటుంబాల నుండి మహిళలు', howToApply: 'LPG పంపిణీదారు', documents: ['ఆధార్', 'రేషన్ కార్డ్'], deadline: 'కొనసాగుతోంది', tag: 'మహిళలు', applicationUrl: 'https://www.pmuy.gov.in/' },
        { id: 15, category: 'housing', icon: '🏡', name: 'PM Awas Yojana Urban', benefit: 'హౌసింగ్ సబ్సిడీ', description: 'నగర గరీబుల కోసం సుviable గృహాలు।', eligibility: 'EWS/LIG కుటుంబాలు', howToApply: 'PMAY పోర్టల్', documents: ['ఆధార్', 'ఆదాయ రుజువు'], deadline: 'కొనసాగుతోంది', tag: 'గృహం', applicationUrl: 'https://pmaymis.gov.in/' },
        { id: 16, category: 'housing', icon: '🏘️', name: 'Kerala LIFE Mission', benefit: 'ఉచిత గృహం', description: 'కేరళలో నిరాశ్రయ కుటుంబాలకు గృహ సహాయం।', eligibility: 'అర్హ కేరళ నివాసులు', howToApply: 'స్థానిక సర్కార్ కార్యాలయం', documents: ['ఆధార్', 'ఆదాయ సర్టిఫికేట్'], deadline: 'కొనసాగుతోంది', tag: 'గృహం', applicationUrl: 'https://lifemission.kerala.gov.in/' },
        { id: 17, category: 'energy', icon: '☀️', name: 'PM Kusum Scheme', benefit: 'సోలార్ పంప్ సబ్సిడీ', description: 'సోలార్ పంపులు మరియు పునర్నవీకరణీయ శక్తి సహాయం।', eligibility: 'రైతులు', howToApply: 'రాష్ట్ర నోడల్ ఏజెన్సీ', documents: ['ఆధార్', 'భూ రికార్డ్‌లు'], deadline: 'కొనసాగుతోంది', tag: 'శక్తి', applicationUrl: 'https://pmkusum.mnre.gov.in/' },
        { id: 18, category: 'energy', icon: '🔋', name: 'Solar Rooftop Scheme', benefit: '40% సబ్సిడీ', description: 'నివాస రూఫ్‌టాప్ సోలార్ సిస్టమ్‌ల కోసం సబ్సిడీ।', eligibility: 'నివాస వినియోగదారులు', howToApply: 'జాతీయ పోర్టల్', documents: ['విద్యుత్ బిల్లు'], deadline: 'కొనసాగుతోంది', tag: 'శక్తి', applicationUrl: 'https://solarrooftop.gov.in/' }
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
