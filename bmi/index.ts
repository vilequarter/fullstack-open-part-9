import express from 'express';
import { calculateBmi } from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  if(isNaN(Number(req.query.height)) || isNaN(Number(req.query.weight))) {
    res.status(400).json({error: 'malformatted parameters'});
  } else {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
  
    const message = calculateBmi(height, weight);
    res.send(message);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});