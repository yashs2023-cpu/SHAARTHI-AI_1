import ScamReport from '../models/ScamReport.js';

export const getScamReports = async (req, res) => {
  try {
    const reports = await ScamReport.find({ userId: req.userId }).sort({ createdAt: -1 }).limit(50);
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createScamReport = async (req, res) => {
  try {
    const report = new ScamReport({
      ...req.body,
      userId: req.userId
    });
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getScamReportById = async (req, res) => {
  try {
    const report = await ScamReport.findOne({ _id: req.params.id, userId: req.userId });
    if (!report) return res.status(404).json({ error: 'Report not found' });
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
