import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";
import mongoose from 'mongoose';

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please fill out the complete reservation form!", 400));
  }

  try {
    // Check if reservation already exists with the same phone number or email within a 2-hour window
    const reservationDateTime = new Date(`${date}T${time}`);
    const twoHoursBefore = new Date(reservationDateTime.getTime() - 2 * 60 * 60 * 1000);
    const twoHoursAfter = new Date(reservationDateTime.getTime() + 2 * 60 * 60 * 1000);

    const existingReservation = await Reservation.findOne({
      email,
      date,
      time: { $gte: twoHoursBefore, $lte: twoHoursAfter }
    });

    if (existingReservation) {
      return res.status(400).json({
        success: false,
        message: "Reservation already exists with this email for the same date and time within a 2-hour window.",
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
