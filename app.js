var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var scheduleRouter = require("./routes/scheduleRouter");
var dishesRouter = require("./routes/dishesRouter");
var ordersRouter = require("./routes/ordersRouter");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS for all routes
app.use(cors());

app.use("/schedule", scheduleRouter);
app.use("/dishes", dishesRouter);
app.use("/orders", ordersRouter);

module.exports = app;
