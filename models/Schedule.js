const mongoose = require("mongoose");

const schedulesSchema = new mongoose.Schema(
  {
  schedules:Array,
}
);

module.exports = mongoose.model("schedules", schedulesSchema);
