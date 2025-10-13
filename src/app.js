const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const pingRoute = require('./routes/pingR');

app.use(express.json());
app.use('/api', userRoutes);
app.use('/', pingRoute);
app.use(errorHandler);

module.exports = app;
