require('dotenv').config()
const express = require('express')
const cors = require("cors");
const connectingToDB = require('./config/db.js')
const errorHandler = require("./middleware/errorHandler.js");

connectingToDB()

const app = express();
app.use(express.json());
app.use(cors());
app.options("*");
app.use(express.urlencoded({ extended: false }));
app.options("*");
app.use(errorHandler);

app.use("/api/users", require("./routes/userRoutes.js"));

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);