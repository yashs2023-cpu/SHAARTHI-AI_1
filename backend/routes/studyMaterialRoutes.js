import express from 'express';
import { getStudyMaterials, createStudyMaterial, deleteStudyMaterial } from '../controllers/studyMaterialController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getStudyMaterials);
router.post('/', authenticateToken, createStudyMaterial);
router.delete('/:id', authenticateToken, deleteStudyMaterial);

export default router;
