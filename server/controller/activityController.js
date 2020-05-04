const Activity = require('../models/activityModel');
const asyncHandler = require('../middleware/error');
const ErrorResponse = require('../utils/errorResponse');

exports.getActivity = asyncHandler(async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json({
      success: true,
      count: activities.length,
      data: activities
    })
  } catch (error) {
      next(err)
  }
});
/*
exports.createActivity = (req, res) => {
    const {
        activity_date,
        client_name,
        job_reference,
        description_of_activity,
        start_time,
        end_time,
        billable_hours,
        rate,
        job_status,
        consultant_remarks,
        clients_remarks
    } = req.body
  Activity.findOne({ job_reference }).exec((err, activity) => {
    if (activity) {
      return res.status(400).json({
        error: "Activity Already Exist",
      });
    }
  });

    let newActivity = new Activity({
        activity_date,
        client_name,
        job_reference,
        description_of_activity,
        start_time,
        end_time,
        billable_hours,
        rate,
        job_status,
        consultant_remarks,
        clients_remarks });

    newActivity.save((err, success) => {

    if (err) {
      console.log("Activity creation error ERROR", err);
      return res.status(400).json({
        error: err,
      });
    }

    res.status(200).json({
      message: "Activity successfully created",
    });
  });

    return res.json({
        message: `created`
    });

}

exports.deleteActivity = (req, res) => {
   return res.json({
        message: `You deleted activity number ${req.params.id}`
    })
}

exports.updateActivity = (req, res) => {
   return res.json({
    message: `You updated activity number ${req.params.id}`,
  });
};

exports.readOneActivity = (req, res) => {
   return res.json({
    message: `These is activity ${req.params.id}`,
  });
};

exports.readAllActivity = (req, res) => {
  //  console.log(res);
  return res.json({
    message: `These are the list of activities`,
  });
}; */





