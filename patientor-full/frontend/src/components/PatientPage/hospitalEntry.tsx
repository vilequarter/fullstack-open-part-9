import { HospitalEntry } from "../../types";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

interface Props {
  entry: HospitalEntry;
}

const HospitalEntryDetails = ({ entry }: Props) => {
  return (
    <>
      <LocalHospitalIcon /> Hospital Visit
      {entry.discharge ? 
      <div>
        <div>Discharge on {entry.discharge.date}</div>
        <div>Reason: {entry.discharge.criteria}</div>
      </div> : <></>}
    </>
  );
};

export default HospitalEntryDetails;