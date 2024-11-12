import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  console.log('Fetching all patients');
  const patients = patientService.getNonSensitivePatients();
  res.send(patients);
});

router.post('/', (_req, res) => {
  res.send('Saving a patient');
});

export default router;