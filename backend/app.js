require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db.js");
const errorHandler = require("./middleware/errorHandler.js");
// const port = process.env.PORT || 6000;

connectToDB();

const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded());
app.use("/api/users", require("./routes/userRoutes.js"));

app.use(errorHandler);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

