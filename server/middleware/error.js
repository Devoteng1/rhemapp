const ErrorResponse = require("../utils/errorResponse");

const errorHandle = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  //log to console
  console.log(err);

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `resource not found with ID of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate key
  if (err.code === 11000) {
    const message = "Duplicate Field value entered";
    error = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandle; 
