import express from 'express';
import { getScamReports, createScamReport, getScamReportById } from '../controllers/scamReportController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getScamReports);
router.post('/', authenticateToken, createScamReport);
router.get('/:id', authenticateToken, getScamReportById);

export default router;
