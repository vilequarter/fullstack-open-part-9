interface BmiValues {
  height: number;
  weight: number;
};

const parseArguments = (args: string[]): BmiValues => {
  if(args.length < 4) throw new Error('Not enough arguments');
  if(args.length > 4) throw new Error('Too many arguments');

  if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers')
  }
};

// weight / ((height / 100)^2)
// < 18.5 = underweight
// 18.5 - 24.9 = normal range
// 25 - 29.9 = overweight
// >= 30 = obese
const calculateBmi = (height: number, weight: number): String => {
  const bmi = weight / (Math.pow((height / 100), 2));
  let message = `height: ${height}cm\nweight: ${weight}kg\nbmi = ${bmi}\n`;
  if(bmi < 18.5) message += 'Underweight';
  if(bmi >= 18.5 && bmi < 25) message += 'Normal Range';
  if(bmi >= 25 && bmi < 30) message += 'Overweight';
  if(bmi >= 30) message += 'Obese';
  return message;
};

try {
  const { height, weight } = parseArguments(process.argv);
  const message = calculateBmi(height, weight);
  console.log(message);
} catch (error: unknown) {
  let errorMessage = 'Error';
  if(error instanceof Error) {
    errorMessage += ': ' + error.message;
  };
  console.log(errorMessage);
};

// console.log(calculateBmi(180, 74));