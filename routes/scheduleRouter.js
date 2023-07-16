var express = require('express');
var router = express.Router();

const {getAllSchedules,updateSchedules} = require('../controllers/scheduleController');

//get all schedules
router.get('/get_schedule',getAllSchedules );
//update schedule
router.put('/update_schedules',updateSchedules );


module.exports = router;
