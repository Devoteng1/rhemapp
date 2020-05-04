const express = require('express');
const router = express.Router();

const activityController = require('../controller/activityController');
/*
//read activity
router.get('/activity', activityController.readAllActivity);

//read one activity
router.get("/activity/:id", activityController.readOneActivity);

//create Activity
router.post('/activity',activityController.createActivity);

//delete activity
router.delete('/activity/:id', activityController.deleteActivity);

//update activity
router.put('/activity/:id', activityController.updateActivity);

router.get('/test',activityController.getExample)*/

router.route('/').get(activityController.getActivity);


module.exports = router;
