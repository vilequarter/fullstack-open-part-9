import { HealthCheckEntry, HealthCheckRating } from "../../types";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
  entry: HealthCheckEntry
}

const HealthCheckColor = (rating: HealthCheckRating) => {
  switch(rating) {
    case 0:
      return <FavoriteIcon color="success"/>;
    case 1: 
      return <FavoriteIcon color="info"/>;
    case 2:
      return <FavoriteIcon color="warning"/>;
    case 3:
      return <FavoriteIcon color="error"/>;
    default:
      return <FavoriteIcon color="disabled"/>;
  }
};

const HealthCheckEntryDetails = ({ entry }: Props) => {
  return (
    <>
      <div><MedicalServicesIcon/> Health Check</div>
      <div>{HealthCheckColor(entry.healthCheckRating)}</div>
    </>
  );
};

export default HealthCheckEntryDetails;