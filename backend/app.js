require('dotenv').config()
const express = require('express')
const cors = require("cors");
const connectingToDB = require('./config/db.js')

connectingToDB()

const app = express();
app.use(express.json());
app.use(cors());
app.options("*");
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);