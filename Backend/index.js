

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const body_parser = require("body-parser");
app.use(express.json());
app.use(cors());
app.use(body_parser.json());

const connect = require("./config/database");
connect();

const Form = require("./models/form");
const forms = require("./route/forms");
app.use("/", forms);



app.listen(process.env.PORT, () => {
    console.log("Server Satrted at 5174");
})


