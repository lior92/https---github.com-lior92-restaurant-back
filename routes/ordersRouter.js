var express = require('express');
var router = express.Router();

const {addOrder} = require('../controllers/ordersController');


//Add order

router.post('/add_order', addOrder);




module.exports = router;