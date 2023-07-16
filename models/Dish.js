const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
        category: String,
        title: String,
        description: String,
        image:String ,
        price:String
}
);

module.exports = mongoose.model("dishes", dishSchema);
