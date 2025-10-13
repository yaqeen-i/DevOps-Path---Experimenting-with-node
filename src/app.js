const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/api', userRoutes);
app.use(errorHandler);

module.exports = app;
