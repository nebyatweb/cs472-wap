const express = require('express');
const app = express();
const calc = require('./calcmod.js');

app.get('/', (req, res) => {
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Calculator webapp using express</title>
          </head>
          <body>
            <form action="http://localhost:8000/calculate">
              <label for="first">First Number</label>
              <input type="text" name="first" />
              <label for="second">Second Number</label>
              <input type="text" name="second" />
              <select name="operation">
                <option value="add">+</option>
                <option value="sub">-</option>
                <option value="div">&#247;</option>
                <option value="mul">*</option>
              </select>
              <button type="submit">Calculate</button>
            </form>
          </body>
        </html>
        `);
        res.end();
});

app.get('/calculate', (req, res) => {
   
    const result = calc.calculate(req, res, res.query);

    res.write(`
    <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Calculator webapp using express</title>
          </head>
          <body>
            <h1>Result is ${result}<h1>
            <a href="http://localhost:8000/">Another Calculation</a>
          </body>
          </html>
    `);
    res.end();
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});