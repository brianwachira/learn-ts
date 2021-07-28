/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import patientData from '../../data/patients';
import { NewPatientEntry, PatientEntry, NonSensitivePatientEntry, NewEntry } from '../types';
import {v1 as uuid} from 'uuid';
import {ensure} from '../utils';
const patients: Array<PatientEntry> = patientData ;

const getPatients = (): Array<PatientEntry> => {
    return patients;
};

const addPatient = ( entry: NewPatientEntry): PatientEntry => {
    
    const newId = uuid();
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

const findById = (id: string): PatientEntry  => {
    const entry = ensure(patients.find(p => p.id === id));
    return entry;
};

const addEntry = (id: string, entry: NewEntry ): PatientEntry => {


    const patient = ensure(patients.find(p => p.id === id));
    const newId = uuid();
    const newEntries = {
        id: newId,
        ...entry
    };
    patient.entries.push(newEntries);
    patients.push(patient);

    return patient;
};

export default {
    getPatients,
    addPatient,
    getNonSensitiveEntries,
    findById,
    addEntry
};