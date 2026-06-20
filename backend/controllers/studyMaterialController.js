import StudyMaterial from '../models/StudyMaterial.js';

export const getStudyMaterials = async (req, res) => {
  try {
    const { subject } = req.query;
    const query = { userId: req.userId };
    if (subject) query.subject = subject;
    const materials = await StudyMaterial.find(query).sort({ createdAt: -1 });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createStudyMaterial = async (req, res) => {
  try {
    const material = new StudyMaterial({
      ...req.body,
      userId: req.userId
    });
    await material.save();
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteStudyMaterial = async (req, res) => {
  try {
    const material = await StudyMaterial.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!material) return res.status(404).json({ error: 'Material not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
