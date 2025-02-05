import express from 'express';
import classifyNumber from '../controllers/classifyNumber.js';

const router = express.Router();

router.get('/classify-number', classifyNumber);

export default router;

