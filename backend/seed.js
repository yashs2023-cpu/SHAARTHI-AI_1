import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Scheme from './models/Scheme.js';
import Scholarship from './models/Scholarship.js';

dotenv.config();

const schemes = [
  {
    name: 'PM-KISAN Samman Nidhi',
    category: 'agriculture',
    benefit: '₹6,000/year in 3 installments',
    description: 'Direct income support to farmer families with cultivable land holding',
    eligibility: 'All farmer families with cultivable land',
    documents: ['Aadhaar Card', 'Bank Account', 'Land Records'],
    applicationUrl: 'https://pmkisan.gov.in',
  },
  {
    name: 'Ayushman Bharat – PMJAY',
    category: 'health',
    benefit: '₹5 lakh/year health cover per family',
    description: 'Free health insurance for secondary and tertiary hospitalization',
    eligibility: 'Bottom 40% vulnerable families (based on SECC data)',
    documents: ['Aadhaar Card', 'Ration Card', 'Income Certificate'],
    applicationUrl: 'https://pmjay.gov.in',
  },
  {
    name: 'PM Ujjwala Yojana',
    category: 'energy',
    benefit: 'Free LPG connection + ₹1,600 subsidy',
    description: 'Providing clean cooking fuel to BPL households',
    eligibility: 'Women from BPL households',
    documents: ['BPL Card', 'Aadhaar Card', 'Bank Account'],
    applicationUrl: 'https://www.pmujjwalayojana.com',
  },
  {
    name: 'PM Mudra Yojana',
    category: 'employment',
    benefit: 'Loans up to ₹10 lakh without collateral',
    description: 'Micro-finance loans for non-corporate small business',
    eligibility: 'Any Indian citizen with a business plan',
    documents: ['Aadhaar Card', 'PAN Card', 'Business Plan', 'Bank Statement'],
    applicationUrl: 'https://www.mudra.org.in',
  },
  {
    name: 'Sukanya Samriddhi Yojana',
    category: 'employment',
    benefit: '7.6% interest rate, tax-free maturity',
    description: 'Savings scheme for girl child education and marriage',
    eligibility: 'Parents of girl child below 10 years',
    documents: ['Birth Certificate', 'Aadhaar of Guardian', 'Address Proof'],
    applicationUrl: 'https://www.india.gov.in',
  },
  {
    name: 'PM Awas Yojana (Urban)',
    category: 'employment',
    benefit: 'Interest subsidy up to ₹2.67 lakh for home loans',
    description: 'Affordable housing for urban poor through credit linked subsidy',
    eligibility: 'EWS/LIG/MIG categories in urban areas',
    documents: ['Aadhaar Card', 'Income Proof', 'No-home Certificate'],
    applicationUrl: 'https://pmaymis.gov.in',
  },
];

const scholarships = [
  {
    name: 'National Scholarship Portal – Post Matric',
    amount: 25000,
    eligibility: 'Family income below ₹2.5 lakh, SC/ST/OBC/Minority',
    description: 'Central government scholarship for higher education students',
    category: 'need-based',
    university: 'All recognized universities',
    applicationUrl: 'https://scholarships.gov.in',
  },
  {
    name: 'INSPIRE Scholarship (DST)',
    amount: 80000,
    eligibility: 'Top 1% in Class 12 board exams, pursuing BSc/BS/Int. MSc',
    description: 'Innovation in Science Pursuit for Inspired Research',
    category: 'merit',
    university: 'All recognized institutions offering natural/basic sciences',
    applicationUrl: 'https://online-inspire.gov.in',
  },
  {
    name: 'Maulana Azad National Fellowship',
    amount: 31000,
    eligibility: 'Minority community students pursuing MPhil/PhD',
    description: 'Fellowship for minority students for higher research',
    category: 'category-specific',
    university: 'UGC recognized universities',
    applicationUrl: 'https://scholarships.gov.in',
  },
  {
    name: 'AICTE Pragati Scholarship',
    amount: 50000,
    eligibility: 'Girl students in AICTE approved institutions, family income < ₹8 lakh',
    description: 'For girl students pursuing technical education (Degree/Diploma)',
    category: 'need-based',
    university: 'AICTE approved institutions',
    applicationUrl: 'https://www.aicte-india.org',
  },
  {
    name: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
    amount: 60000,
    eligibility: 'Students in class 11/12 or 1st year BSc with aptitude in science',
    description: 'National fellowship to encourage students to take up research',
    category: 'merit',
    university: 'IISc Bangalore and IISERs',
    applicationUrl: 'http://kvpy.iisc.ac.in',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/saarthi-ai');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Scheme.deleteMany({});
    await Scholarship.deleteMany({});
    console.log('🗑️  Cleared existing schemes and scholarships');

    // Insert seed data
    await Scheme.insertMany(schemes);
    console.log(`✅ Inserted ${schemes.length} government schemes`);

    await Scholarship.insertMany(scholarships);
    console.log(`✅ Inserted ${scholarships.length} scholarships`);

    console.log('\n🎉 Seed complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error.message);
    process.exit(1);
  }
}

seed();
