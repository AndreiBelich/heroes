const express = require("express");
const cors = require("cors");
const router = require("./routes");
const { STATIC_PATH } = require('./config/config');
const errorHandler = require("./middlewares/errorHandler.mw");

const app = express();

app.use(express.json());
app.use(express.static(STATIC_PATH));
app.use(cors());
app.use("/api", router)
app.use(errorHandler);

module.exports = app;