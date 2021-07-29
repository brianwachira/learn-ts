import diagnoses from "../data/diagnoses";
import { NewPatientEntry, Gender, Entry, DiagnoseEntry, HealthCheckRating, NewEntry, EntryTypes, dischargeTypes, sickLeaveTypes } from "./types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};
const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name:' + name);
    }
    return name;
};
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
const parseDate = (dateOfBirth: unknown): string => {
    if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
        throw new Error('Incorrect or missing date: ' + dateOfBirth);
    }
    return dateOfBirth;
};
const parseSsn = (ssn: unknown): string => {
    if (!ssn || !isString(ssn)) {
        throw new Error('Incorrect or missing ssn:' + ssn);
    }
    return ssn;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender:' + gender);
    }
    return gender;
};

const parseOccupation = (occupation: unknown): string => {
    if (!occupation || !isString(occupation)) {
        throw new Error('Incorrent or missing occupation');
    }
    return occupation;
};

const parseLatin = (latin: unknown): string => {
    if (!latin || !isString(latin)) {
        throw new Error('Incorrent or missing latin');
    }
    return latin;
};

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown, entries: Entry[] };

export const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation, entries }: Fields): NewPatientEntry => {
    const newEntry: NewPatientEntry = {
        name: parseName(name),
        dateOfBirth: parseDate(dateOfBirth),
        ssn: parseSsn(ssn),
        gender: parseGender(gender),
        occupation: parseOccupation(occupation),
        entries
    };

    return newEntry;
};


export function ensure<T>(argument: T | undefined | null, message = 'This value was promised to be there.'): T {

    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }

    return argument;
}

const parseCode = (code: unknown): string => {
    if (!parseCode || !isString(code)) {
        throw new Error('Incorrect or missing code:' + code);
    }
    return code;
};

const parseString = (anystring: unknown): string => {
    if (!parseCode || !isString(anystring)) {
        throw new Error('Incorrect or missing code:' + anystring);
    }
    return anystring;
};
type DiagnoseEntryFields = { code: unknown, name: unknown, latin: unknown };

type DischargeFields = { date: unknown, criteria: unknown };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDischarge = (discharge: any): dischargeTypes => {

    if (!discharge || Object.keys(discharge).length !== 2) {
        throw new Error('Discharge is invalid or not found:' + discharge);
    }
    if (!discharge.date) {
        throw new Error('Discharge date is invalid or not found' + discharge);
    }
    if (!discharge.criteria) {
        throw new Error('Discharge date is invalid or not found' + discharge);
    }

    return {
        date: parseDate(discharge.date),
        criteria: parseString(discharge.criteria)
    };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseSickLeave = (sickLeave: any): sickLeaveTypes => {

    if (!sickLeave || Object.keys(sickLeave).length !== 2) {
        throw new Error('Discharge is invalid or not found:' + sickLeave);
    }
    if (!sickLeave.date) {
        throw new Error('Discharge date is invalid or not found' + sickLeave);
    }
    if (!sickLeave.criteria) {
        throw new Error('Discharge date is invalid or not found' + sickLeave);
    }

    return {
        startDate: parseString(sickLeave.startDate),
        endDate: parseString(sickLeave.endDate)
    };
};
export const toNewDiagnoseEntry = ({ code, name, latin }: DiagnoseEntryFields): DiagnoseEntry => {
    const newDiagnoseEntry: DiagnoseEntry = {
        code: parseCode(code),
        name: parseName(name),
        latin: parseLatin(latin)
    };
    return newDiagnoseEntry;
};
const isDiagnosisCodesArray = (param: unknown): param is Array<DiagnoseEntry['code']> =>{
    return (Array.isArray(param)) && param.every((code) => isString(code) && diagnoses.find((x) => x.code === code));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDiagnoseCodes = (diagnoseCodes: any):  Array<DiagnoseEntry['code']> => {
    
    if(!isDiagnosisCodesArray(diagnoseCodes)){
        throw new Error('Incorrect or missing diagnose codes:' + diagnoseCodes);
    }
    return diagnoseCodes;
};
const parseDescription = (description: unknown): string => {
    if (!description || !isString(description)) {
        throw new Error('Incorrect or missing description:' + description);
    }
    return description;
};

const parseSpecialist = (specialist: unknown): string => {
    if (!specialist || !isString(specialist)) {
        throw new Error('Incorrect or missing specialist:' + specialist);
    }
    return specialist;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEntryType = (param: any): param is EntryTypes => {
    return Object.values(EntryTypes).includes(param);
};

const parseHospitalEntryType = (type: unknown): EntryTypes.Hospital | EntryTypes.Hospital => {
    if (!type || !isEntryType(type) || type !== 'Hospital') {
        throw new Error('Incorrect or missing type:' + type);
    }
    return type;
};

const parseOccupationalHealthcareType = (type: unknown): EntryTypes.OccupationalHealthcare => {
    if (!type || !isEntryType(type) || type !== 'OccupationalHealthcare') {
        throw new Error('Incorrect or missing type:' + type);
    }
    return type;
};

const parseHealthCheckType = (type: unknown): EntryTypes.HealthCheck => {
    if (!type || !isEntryType(type) || type !== 'HealthCheck') {
        throw new Error('Incorrect or missing type:' + type);
    }
    return type;
};

const parseEmployerName = (employerName: unknown): string => {
    if (!employerName || !isString(employerName)) {
        throw new Error('Incorrect or missing description:' + employerName);
    }
    return employerName;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isHealthCheckRating = (param: any): param is HealthCheckRating => {
    return Object.values(HealthCheckRating).includes(param);
};
const parseHealthCheckRating = (healthCheckRating: unknown): HealthCheckRating => {
    if (!healthCheckRating || !isHealthCheckRating(healthCheckRating)) {
        throw new Error('Incorrect or missing healthCheckRating:' + healthCheckRating);
    }
    return healthCheckRating;
};

interface BaseEntryFields {
    description: unknown,
    date: unknown,
    specialist: unknown,
    diagnosisCodes?: unknown[]
}

interface HospitalEntryFields extends BaseEntryFields {
    type: unknown,
    discharge?: DischargeFields,
}
type HospitalEntryField = HospitalEntryFields;
interface OccupationalHealthcareEntryFields extends BaseEntryFields {
    type: unknown,
    employerName: unknown,
    sickLeave?: {
        startDate: unknown;
        enddate: unknown;
    }
}
type OccupationalHealthcareEntryField = OccupationalHealthcareEntryFields;
interface HealthCheckEntryFields extends BaseEntryFields {
    type: unknown;
    healthCheckRating: unknown;
}
type HealthCheckEntryField = HealthCheckEntryFields;
export type newEntryFields = HospitalEntryFields | OccupationalHealthcareEntryFields | HealthCheckEntryFields;

export const toNewHospitalEntryfield = ({ description, date, specialist, diagnosisCodes, type, discharge }: HospitalEntryField): NewEntry => {

    const newEntry: NewEntry = {
        description: parseDescription(description),
        date: parseDate(date),
        specialist: parseSpecialist(specialist),
        diagnosisCodes: parseDiagnoseCodes(diagnosisCodes),
        type: parseHospitalEntryType(type),
        discharge: parseDischarge(discharge)

    };
    return newEntry;
};

export const toNewOccupationalHealthcare = ({ description, date, specialist, diagnosisCodes, type, employerName, sickLeave }: OccupationalHealthcareEntryField): NewEntry => {
    const newEntry: NewEntry = {
        description: parseDescription(description),
        date: parseDate(date),
        specialist: parseSpecialist(specialist),
        diagnosisCodes: parseDiagnoseCodes(diagnosisCodes),
        type: parseOccupationalHealthcareType(type),
        employerName: parseEmployerName(employerName),
        sickLeave: parseSickLeave(sickLeave)
    };

    return newEntry;
};

export const toNewHealthCheckEntry = ({ description, date, specialist, diagnosisCodes, type, healthCheckRating }: HealthCheckEntryField): NewEntry => {
    const newEntry: NewEntry = {
        description: parseDescription(description),
        date: parseDate(date),
        specialist: parseSpecialist(specialist),
        diagnosisCodes: parseDiagnoseCodes(diagnosisCodes),
        type: parseHealthCheckType(type),
        healthCheckRating: parseHealthCheckRating(healthCheckRating),

    };
    return newEntry;
};