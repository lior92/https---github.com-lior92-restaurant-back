const Order = require("../models/Order");

module.exports = {
  addOrder: async (req, res) => {
    try {
      const { dishes } = req.body;

      if (!dishes) {
        throw new Error("Please provide order");
      }

      const newOrder = new Order({ dishes });

      await newOrder.save(); // Save the new order to the database

      return res.status(200).json({
        success: true,
        message: "Successfully added order",
        newOrder,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Something went wrong",
        error,
      });
    }
  },
};
