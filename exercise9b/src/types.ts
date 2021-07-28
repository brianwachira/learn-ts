// {
//     "code": "M24.2",
//     "name": "Disorder of ligament",
//     "latin": "Morbositas ligamenti"
//  }

// {
//     "id": "d2773336-f723-11e9-8f0b-362b9e155667",
//     "name": "John McClane",
//     "dateOfBirth": "1986-07-09",
//     "ssn": "090786-122X",
//     "gender": "male",
//     "occupation": "New york city cop"
// },

// eslint-disable-next-line @typescript-eslint/no-empty-interface

interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<DiagnoseEntry['code']>;
}
export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}


interface HospitalEntry extends BaseEntry {
    type: 'Hospital';
    discharge?:{
        date: string;
        criteria: string;
    }
}

interface OccupationalHealthcare extends BaseEntry {
    type: 'OccupationalHealthcare';
    employerName: string;
    sickLeave?: {
        startDate: string;
        endDate: string;

    }
}

interface HealthCheckEntry extends BaseEntry {
    type: 'HealthCheck';
    healthCheckRating: HealthCheckRating;
}

export type Entry = HospitalEntry | OccupationalHealthcare | HealthCheckEntry;

export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
}
export enum Gender {
    Male = 'male',
    Female = 'female',
}  
export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries: Entry[]
}
export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export type PublicPatient = Omit<PatientEntry, 'ssn' | 'entries'>;

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'> | PublicPatient; 

// Define special omit for unions
type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;

// Define Entry without the 'id' property
export type NewEntry = UnionOmit<Entry, 'id'>;