import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch/*, useRouteMatch */ } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";

import { apiBaseUrl } from "./constants";
import { setPatientList, setDiagnosisList, useStateValue } from "./state";
import { Patient, Diagnosis } from "./types";

import PatientListPage from "./PatientListPage";
import Patients from "./Patients";

const App = () => {
  const [, dispatch] = useStateValue();
  React.useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch(setPatientList(patientListFromApi));
      } catch (e) {
        console.error(e);
      }
    };

    const fetchDiagnosis = async () => {
        try{
            const { data: diagnosisFromApi } = await axios.get<Diagnosis[]> (
                `${apiBaseUrl}/diagnosis/`
            );
            dispatch(setDiagnosisList(diagnosisFromApi));
        } catch (e) {
            console.error(e);
        }
    };
    void fetchPatientList();
    void fetchDiagnosis();
  }, [dispatch]);

  //const match : string= useRouteMatch('/patients/:id');

  // const fetchPatient = async () => {

  // }
  return (
    <div className="App">
      <Router>
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path="/patients/:id">
              <Patients />
            </Route>
            <Route path="/">
              <PatientListPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
