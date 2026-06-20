import mongoose from 'mongoose';

const studyMaterialSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  topic: { type: String, required: true },
  subject: { type: String, required: true },
  content: String,
  keyPoints: [String],
  practiceQuestions: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('StudyMaterial', studyMaterialSchema);
