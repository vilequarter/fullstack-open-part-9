import express from 'express';
import patientService from '../services/patientService';
import { toNewPatient } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  console.log('Fetching all patients');
  const patients = patientService.getNonSensitivePatients();
  res.send(patients);
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);

    const addedPatient = patientService.addPatient(newPatient);
    console.log('Saving a patient');
    res.send(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Error';
    if (error instanceof Error) {
      errorMessage += ': ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;