import express from 'express';
import { getReminders, createReminder, updateReminder, deleteReminder } from '../controllers/reminderController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getReminders);
router.post('/', authenticateToken, createReminder);
router.put('/:id', authenticateToken, updateReminder);
router.delete('/:id', authenticateToken, deleteReminder);

export default router;
