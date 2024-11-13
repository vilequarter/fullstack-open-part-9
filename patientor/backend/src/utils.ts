import { Gender, NewPatient } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isNotEmpty = (text: string): boolean => {
  if(text.length < 1) {
    return false;
  }
  return true;
};

const parseName = (name: unknown): string => {
  if(!isString(name)) {
    throw new Error('Incorrect name: ' + name);
  }
  if(isNotEmpty(name)) return name;
  throw new Error('Name cannot be empty');
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (date: unknown): string => {
  if(!isString(date) || !isDate(date)) {
    throw new Error('Incorrect date: ' + date);
  }
  return date;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(v => v.toString()).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect gender: ' + gender);
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error('Incorrect occupation: ' + occupation);
  }
  if(isNotEmpty(occupation)) return occupation;
  throw new Error('Occupation cannot be empty');
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error('Incorrect ssn: ' + ssn);
  }
  if(isNotEmpty(ssn))return ssn;
  throw new Error('SSN cannot be empty');
};

export const toNewPatient = (object: unknown): NewPatient => {
  if( !object || typeof object !== 'object' ) {
    throw new Error('Incorrect or missing data');
  }

  if('name' in object && 'dateOfBirth' in object && 'gender' in object && 'occupation' in object && 'ssn' in object) {
    const newPatient: NewPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
      ssn: parseSsn(object.ssn)
    };
    return newPatient;
  }

  throw new Error('Incorrect data: some fields are missing');
};