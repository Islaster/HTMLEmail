const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors");
const app = express();

require('dotenv').config();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' 
}));
app.use(require('./routes/emailRoutes'))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
