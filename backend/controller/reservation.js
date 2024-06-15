// ./controller/reservation.js

import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please fill out the complete reservation form!", 400));
  }

  try {
    // Check if reservation already exists with the same phone number or email
    const existingReservation = await Reservation.findOne({
      $or: [{ phone }, { email }],
    });

    if (existingReservation) {
      return res.status(400).json({
        success: false,
        message: "Reservation already exists with this phone number or email.",
      });
    }

    // If no existing reservation found, create a new one
    await Reservation.create({ firstName, lastName, email, date, time, phone });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default send_reservation;
