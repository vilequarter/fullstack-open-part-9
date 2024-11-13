import express, { Request, Response, NextFunction } from 'express';
import patientService from '../services/patientService';
import { NewPatientSchema } from '../utils';
import { NewPatient, Patient, NonSensitivePatient } from '../types';
import { z } from 'zod';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatient[]>) => {
  console.log('Fetching all patients');
  const patients = patientService.getNonSensitivePatients();
  res.send(patients);
});

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    NewPatientSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => { 
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues[0].message });
  } else {
    next(error);
  }
};

router.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
  const addedPatient = patientService.addPatient(req.body);
  res.send(addedPatient);
});

router.use(errorMiddleware);

/*
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
*/

export default router;