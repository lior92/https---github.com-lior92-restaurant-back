var express = require("express");
var router = express.Router();

const {
  addDish,
  getAllDishes,
  addDishes,
} = require("../controllers/dishesController");

//add Dish
router.post("/add_dish", addDish);
//InsertMany dishes
router.post("/add_dishes", addDishes);
//Get all dishes
router.get("/all_dishes", getAllDishes);

module.exports = router;
