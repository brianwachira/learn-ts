import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import { Header,Container,Icon } from 'semantic-ui-react';
import { apiBaseUrl } from '../constants';
import { useStateValue } from '../state';
import { Patient, Entry, Diagnosis } from '../types';

interface entryProps {
    entries: Entry[] | undefined;
    diagnosis: Diagnosis[];
}


const Entries = ({entries, diagnosis }: entryProps): JSX.Element => {

    const findDiagnosisName = (code: string): string | undefined => {

        const foundDiagnosis: Diagnosis | undefined = diagnosis.find(diagnos => diagnos.code === code);

        return foundDiagnosis?.name;
        // console.log(diagnosis);
        // console.log(code);
        // return 'ddd';
    };
    return (
        <>
        <Header as="h3">Entries</Header>
            {entries?.map(entry => {
                switch (entry.type) {
                    case 'HealthCheck':
                        return(<>
                            <p>{entry.date} : {entry.description}</p>
                        </>);
                        break;
                    case 'OccupationalHealthcare':
                        return (<>
                            <p>{entry.date} : {entry.description}</p>
                            <ul>
                            {entry.diagnosisCodes?.map(code => {
                                return (<><li key={code}>{code} : 
                                {findDiagnosisName(code)}
                                </li></>);
                            })}
                            </ul>
                        </>);
                    case 'Hospital':
                        return (<>
                            <p>{entry.date} : {entry.description}</p>

                        </>);
                }
            })}
        </>
    );
};

const Patients = () => {
    const { id } = useParams<{ id: string }>();

    const [{ patient,diagnosis },dispatch] = useStateValue();
    React.useEffect(() => {

        if(id !== patient?.id){
            const fetchPatient = async () => {
                try {
                    const { data: patientFromApi } = await axios.get<Patient>(
                        `${apiBaseUrl}/patients/${id}`
                    );
                    dispatch({ type: "SET_PATIENT", payload: patientFromApi});
                } catch (e) {
                    console.error(e);
                }
            };
            void fetchPatient();
        }
    }, [dispatch]);

    const setGenderIcon =  (gender : string | undefined) => {
        switch (gender) {
            case "female":
                return "venus";
            case "male":
                return "mars";
            case "other":
                return "genderless";
        }
    };
    return (
        <>
            <div className="App">
                <Container>
                    <Header as="h2">{patient?.name} <Icon name={setGenderIcon(patient?.gender)}/></Header>
                        <p>ssn: {patient?.ssn}</p>
                        <p>occupation: {patient?.occupation}</p>
                    <Entries entries={patient?.entries} diagnosis={diagnosis}/>
                </Container>

            </div>
        </>
    );
};
export default Patients;