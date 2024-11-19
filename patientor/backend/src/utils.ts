import { Gender, NewPatient } from "./types";
import { z } from 'zod';

export const NewPatientSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty'),
  dateOfBirth: z.string().date(),
  gender: z.nativeEnum(Gender),
  occupation: z.string().min(1, 'Occupation cannot be empty'),
  ssn: z.string().min(1, 'SSN cannot be empty'),
});

export const toNewPatient = (object: unknown): NewPatient => {
  return NewPatientSchema.parse(object);
};