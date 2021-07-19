import patientData from '../../data/patients.json';
import { PatientEntry, NonSensitivePatientEntry } from '../types';

const patients: Array<PatientEntry> = patientData as Array<PatientEntry>;

const getPatients = (): Array<PatientEntry> => {
    return patients;
};

const addPatient = () => {
    return null;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

export default {
    getPatients,
    addPatient,
    getNonSensitiveEntries
};