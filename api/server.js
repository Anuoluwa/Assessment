const express = require('express');
const routes = require('./routes');
const app = express();

app.get('/', (req, res) => res.status(200).send('welcome to  Server Planner API!'));
app.use(express.json());
app.use('/api', routes);

module.exports = app;