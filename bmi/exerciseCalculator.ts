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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))