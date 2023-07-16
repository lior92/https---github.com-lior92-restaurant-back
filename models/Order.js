const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  category: String,
  price: Number,
  description: String,
  quantity: Number,
});

const orderSchema = new mongoose.Schema({
  dishes: [dishSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("orders", orderSchema);
