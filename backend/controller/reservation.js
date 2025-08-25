import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone, restaurantName } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone || !restaurantName) {
    return next(new ErrorHandler("Please fill out the complete reservation form!", 400));
  }

  try {
    // Check if restaurant is fully booked at the given time
    const existingReservationsCount = await Reservation.countDocuments({
      restaurantName,
      date,
      time
    });

    if (existingReservationsCount >= 20) {
      return next(
        new ErrorHandler(
          `Sorry, ${restaurantName} is fully booked at ${time} on ${date}. Please choose another time or restaurant.`,
          400
        )
      );
    }

    // Check if user has already made a reservation at the same time
    const existingReservation = await Reservation.findOne({
      $or: [
        { $and: [{ email }, { date }, { time }] },
        { $and: [{ phone }, { date }, { time }] }
      ]
    });

    if (existingReservation) {
      return next(
        new ErrorHandler(
          `You have already made a reservation at ${time} on ${date}. Please choose another time or contact us for assistance.`,
          400
        )
      );
    }

    // Create a new reservation
    await Reservation.create({
      firstName,
      lastName,
      email,
      date,
      time,
      phone,
      restaurantName,
    });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    return next(error);
  }
};

export default send_reservation;
