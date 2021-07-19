import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (__req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});

export default router;