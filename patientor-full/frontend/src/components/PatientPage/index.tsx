import { Diagnosis, Patient } from "../../types";
import Entries from "./entries";

interface Props {
  patient: Patient | null;
  diagnoses: Diagnosis[];
}

const PatientPage = ( { patient, diagnoses }: Props ) => {
  if(patient) {
    return (
      <div>
        <div><span style={{fontSize: 25, fontWeight: 'bold'}}>{patient.name}</span> {patient.gender}</div>
        <div>ssn: {patient.ssn}</div>
        <div>occupation: {patient.occupation}</div><br />
        <Entries patient={patient} diagnoses={diagnoses}/>
      </div>
    );
  }
  return <></>;
};

export default PatientPage;