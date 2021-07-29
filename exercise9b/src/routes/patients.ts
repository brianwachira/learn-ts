import express from 'express';
import patientService from '../services/patientService';
import { toNewPatientEntry, toNewHospitalEntryfield, toNewOccupationalHealthcare, toNewHealthCheckEntry } from '../utils';

const router = express.Router();

router.get('/', (__req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
    const patient = patientService.findById(String(req.params.id));

    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body);
        const addedEntry = patientService.addPatient(newPatientEntry);

        res.json(addedEntry);

    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.post('/:id/entries', (req, res) => {
    try {

        switch (req.body['type']) {
            case 'OccupationalHealthcare':
                const newOccupationalHealthcareEntry = toNewOccupationalHealthcare(req.body);

                res.json(patientService.addEntry(String(req.params.id), newOccupationalHealthcareEntry));
                break;
            case 'Hospital':
                const newHospitalEntry = toNewHospitalEntryfield(req.body);
                res.json(patientService.addEntry(String(req.params.id), newHospitalEntry));
                break;
            case 'HealthCheck':
                const newHealthCheckEntry = toNewHealthCheckEntry(req.body);
                res.json(patientService.addEntry(String(req.params.id), newHealthCheckEntry));
                break;
            default:
                res.status(400).json('not applicale');
                break;
        }


    } catch (e) {
        res.status(400).send(e.message);
    }
});

export default router;