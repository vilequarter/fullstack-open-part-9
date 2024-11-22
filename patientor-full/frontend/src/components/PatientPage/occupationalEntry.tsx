import { OccupationalHealthcareEntry } from "../../types";
import WorkIcon from '@mui/icons-material/Work';

interface Props {
  entry: OccupationalHealthcareEntry
}

const OccupationalEntryDetails = ({ entry }: Props) => {
  return (
    <>
      <div><WorkIcon />Employer: {entry.employerName}</div>
      {entry.sickLeave ? 
      <div>
        Sick Leave start: {entry.sickLeave.startDate}, end: {entry.sickLeave.endDate}
      </div> : <></>}
    </>
  );
};

export default OccupationalEntryDetails;