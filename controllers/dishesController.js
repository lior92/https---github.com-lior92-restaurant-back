const Dish = require("../models/Dish");

module.exports = {
    addDish:async(req,res)=>{
        try {
            
            const { category, title, description } = req.body;

          //Add dish to data base
          const newDish = new Dish({
            category,
            title,
            description
          });


        await  newDish.save()

        return  res.status(200).json({
            success:true,
            message:"Successfully added new dish",
            newDish
        })

        } catch (error) {
            return res.status(401).json({
                success:false,
                message:error
            })
        }
    },
    addDishes: async (req, res) => {
    try {
      const { dishes } = req.body;

      // Insert array of dishes into the database
      const newDishes = await Dish.insertMany(dishes);

      return res.status(200).json({
        success: true,
        message: "Successfully added new dishes",
        newDishes
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: error
      });
    }
  },
    getAllDishes: async (req, res) => {
        try {
          // Fetch all dishes from the database
          const dishes = await Dish.find();
    
          return res.status(200).json({
            success: true,
            message: "Successfully retrieved all dishes",
            dishes
          });
        } catch (error) {
          return res.status(401).json({
            success: false,
            message: error
          });
        }
      }
};
