import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();
app.use(express.json());

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

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body;
  if(!daily_exercises || !target) {
    res.status(400).json({ error: 'missing parameters' });
  };
  let valid = true;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exercises: number[] = daily_exercises.map((element: any) => {
    if(isNaN(Number(element))) valid = false;
    return Number(element);
  });
  if(!valid || isNaN(Number(target))) {
    res.status(400).json({ error: 'malformed parameters' });
  };
  const message =  calculateExercises(exercises, Number(target));
  res.send(message);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});