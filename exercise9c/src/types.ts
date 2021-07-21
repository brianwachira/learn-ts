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
    occupation: string
}

export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;
