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

console.log(calculateBmi(180, 74));