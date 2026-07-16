const express = require('express');
const cors = require('cors');
const inquiryRoutes = require('./routes/inquiryRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'HelloAaye CRM API is running' });
});

app.use('/api/inquiry', inquiryRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
