import express from 'express';
import { bmiCalculatorModule } from './bmiCalculatorModule';
const app = express();

app.get('/hello', (req, res) => {
  res.send('hello fullstack');
});

app.get('/bmi', (req, res) => {
    
    const { query } = req;
    const height = query.height;
    const weight = query.weight;

   res.send(bmiCalculatorModule(weight,height));

});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});