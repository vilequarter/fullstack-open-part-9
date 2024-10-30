type RatingDescription = 'Poor' | 'Good' | 'Excellent';

interface Analysis {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: RatingDescription,
  target: number,
  average: number
};

interface ExerciseDetails {
  hours: number[];
  targetHours: number;
};

const parseExerciseArguments = (args: string[]): ExerciseDetails => {
  if(args.length < 4) throw new Error('Not enough arguments');

  args.slice(2).map(n => {
    if(isNaN(Number(n))) throw new Error('Provided values were not numbers')
  });

  const targetHours = Number(args[2]);
  const hours = args.slice(3)
    .map(n => {
      return Number(n);
  });

  return {
    hours: hours,
    targetHours: targetHours
  };
};

const calculateExercises = (hours: number[], targetHours: number): Analysis => {
  const periodLength = hours.length;

  let trainingDays = 0;
  hours.forEach(n => {
    if(n > 0) trainingDays++;
  });

  const average = hours.reduce((a, b) => a + b) / periodLength;
  
  let rating: number, ratingDescription: RatingDescription, success: boolean;
  if(average < (targetHours / 2)) {
    rating = 1;
    ratingDescription = 'Poor';
    success = false;
  }
  else if(average < targetHours) {
    rating = 2;
    ratingDescription = 'Good';
    success = false;
  }
  else {
    rating = 3;
    ratingDescription = 'Excellent';
    success = true;
  };
  
  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: targetHours,
    average: average
  };
};

try {
  const { hours, targetHours } = parseExerciseArguments(process.argv);
  const details = calculateExercises(hours, targetHours);
  console.log(details);
} catch (error: unknown) {
  let errorMessage = 'Error';
  if(error instanceof Error) {
    errorMessage += ': ' + error.message;
  };
  console.log(errorMessage);
};

//console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))