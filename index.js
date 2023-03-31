const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { config } = require("dotenv");

const { PORT = 4000, LOCAL_ADDRESS = "0.0.0.0" } = process.env;

const connectToDatabase = require("./src/database/connect");
const userControl = require("./src/routes/userControl");
const taskControl = require("./src/routes/taskControl");

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

config();

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
connectToDatabase();
app.use(express.urlencoded({ extended: true }));

//routes
app.use(userControl);
app.use(taskControl);

app.listen(PORT, LOCAL_ADDRESS);
