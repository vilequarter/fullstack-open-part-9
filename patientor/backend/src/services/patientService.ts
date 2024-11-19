import patientData from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { Patient, NonSensitivePatient, NewPatient } from '../types';

let patients: Patient[] = patientData.map(p => {
  return {
    entries: [],
    ...p
  };
});

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = ( patient: NewPatient ): Patient => {
  const newPatient = {
    id: uuid(),
    entries: [],
    ...patient
  };
  
  patients = patients.concat(newPatient);
  return newPatient;
};

const findPatient = ( id: string ): Patient => {
  const p = patients.find(p => {
    return p.id === id;
  });
  if(p) return p;
  throw new Error("Patient not found");
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient,
  findPatient
};