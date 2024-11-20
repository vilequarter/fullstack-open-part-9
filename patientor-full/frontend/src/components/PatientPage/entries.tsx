import { Diagnosis, Patient } from "../../types";

interface Props {
  patient: Patient | null;
  diagnoses: Diagnosis[];
}

const Entries = ({ patient, diagnoses }: Props ) => {
  return (
    <>
      <h3>Entries</h3>
      {patient?.entries.map(entry => {
        return (
        <div key={entry.id}>
          <div>{entry.date}: <i>{entry.description}</i></div>
          <ul>
            {entry.diagnosisCodes?.map(code => {
              const diagnosis = diagnoses.find(d => d.code === code);
              return (
                <li key={code}>{code} {diagnosis ? `: ${diagnosis.name}` : ''}</li>
              );
            })}
          </ul>
        </div>
        );
      })}
    </>
  );
};

export default Entries;