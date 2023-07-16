const Schedules = require("../models/Schedule");

module.exports = {
  getAllSchedules: async (req, res) => {
    try {
      const schedules = await Schedules.find();

      res.status(200).json({
        message: "Successfully retrieved all schedules",
        schedules, // Access the 'schedule' property
      });
    } catch (error) {
      console.error("Error retrieving schedules:", error);
      res.status(500).json({ error: "Failed to retrieve schedules" });
    }
  },
  updateSchedules : async (req, res) => {
    try {
      const { newSchedules, schedules_id } = req.body;
  
      if (!newSchedules || !schedules_id) {
        throw new Error("Please provide newSchedules and schedules_id");
      }
  
      const schedules = await Schedules.findByIdAndUpdate(
        schedules_id,
        { $set: { schedules: newSchedules } },
        { new: true }
      );
  
      res.status(200).json({
        success: true,
        message: "Successfully updated schedules",
        schedules,
        
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to update schedules",
        error,
      });
    }
  }
  
};
