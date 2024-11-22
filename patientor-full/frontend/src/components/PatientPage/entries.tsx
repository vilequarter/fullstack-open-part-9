import { Diagnosis, Entry, Patient } from "../../types";
import HospitalEntryDetails from "./hospitalEntry";
import OccupationalEntryDetails from "./occupationalEntry";
import HealthCheckEntryDetails from "./healthCheckEntry";
import Diagnoses from "./diagnoses";

interface Props {
  patient: Patient | null;
  diagnoses: Diagnosis[];
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch(entry.type) {
    case "Hospital":
      return <HospitalEntryDetails entry={entry}/>;
    case "OccupationalHealthcare":
      return <OccupationalEntryDetails entry={entry}/>;
    case "HealthCheck":
      return <HealthCheckEntryDetails entry={entry}/>;
    default:
      return assertNever(entry);
  }  
};

const Entries = ({ patient, diagnoses }: Props ) => {
  return (
    <div>
      <h3>Entries</h3>
      {patient?.entries.map(entry => {
        return (
          <div key={entry.id} style={{border: '1px solid'}}>
            <br/>
            <div>{entry.date}</div>
            <div><i>{entry.description}</i></div>
            <EntryDetails entry={entry}/>
            <Diagnoses entry={entry} diagnoses={diagnoses} />
            <div>Specialist: {entry.specialist}</div>
            <br/>
          </div>
        );
      })}
    </div>
  );
};

export default Entries;