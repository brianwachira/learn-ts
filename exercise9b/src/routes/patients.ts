import express from 'express';
import patientService from '../services/patientService';
import {toNewPatientEntry} from '../utils';
// {
//     "id": "d2773336-f723-11e9-8f0b-362b9e155667",
//     "name": "John McClane",
//     "dateOfBirth": "1986-07-09",
//     "ssn": "090786-122X",
//     "gender": "male",
//     "occupation": "New york city cop"
// }
const router = express.Router();

router.get('/', (__req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
    const patient = patientService.findById(String(req.params.id));

    if(patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    try{
        const newPatientEntry = toNewPatientEntry(req.body);
        const addedEntry = patientService.addPatient(newPatientEntry);

        res.json(addedEntry);

    }catch(e) {
        res.status(400).send(e.message);
    }
});

export default router;