import { Diagnosis, Entry } from "../../types";

interface Props {
  entry: Entry;
  diagnoses: Diagnosis[];
}

const Diagnoses = ({ entry, diagnoses }: Props) => {
  if(entry.diagnosisCodes) {
    return (
      <ul>
        {entry.diagnosisCodes?.map(code => {
          const diagnosis = diagnoses.find(d => d.code === code);
          return (
            <li key={code}>{code} {diagnosis ? `: ${diagnosis.name}` : ''}</li>
          );
        })}
      </ul>
    );
  } else return <></>;
};


export default Diagnoses;