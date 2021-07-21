/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import patientData from '../../data/patients';
import { NewPatientEntry, PatientEntry, NonSensitivePatientEntry, } from '../types';
import {v1 as uuid} from 'uuid';
const patients: Array<PatientEntry> = patientData as Array<PatientEntry>;

const getPatients = (): Array<PatientEntry> => {
    return patients;
};

const addPatient = ( entry: NewPatientEntry): PatientEntry => {
    
    const newId : string = uuid();
    const newPatientEntry = {
        id: newId,
        ...entry
    };

    patients.push(newPatientEntry);
    return newPatientEntry;
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

const findById = (id: string): PatientEntry | undefined => {
    const entry = patients.find(p => p.id === id);
    return entry;
};

export default {
    getPatients,
    addPatient,
    getNonSensitiveEntries,
    findById
};