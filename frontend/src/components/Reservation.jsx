import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!firstName || !lastName || !email || !date || !time || !phone || !restaurantName) {
      toast.error("Please fill out all fields!");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Validate phone number (10 digits)
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    try {
      const requestData = { 
        firstName, 
        lastName, 
        email, 
        phone, 
        date, 
        time, 
        restaurantName 
      };
      
      console.log("Sending reservation data:", requestData);
      
      const { data } = await axios.post(
        "  https://restaurant-backend-dwys4zugl-adarsh06261s-projects.vercel.app",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("Reservation successful:", data);
      
      // Show success message
      toast.success(data.message);
      
      // Clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setRestaurantName("");
      
      // Navigate to success page
      navigate("/success");
      
    } catch (error) {
      console.error("Reservation error:", error);
      const errorMessage = error.response?.data?.message || "An error occurred while making the reservation";
      toast.error(errorMessage);
    }
  }

  return (
    <section className='reservation' id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further queries, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder='Date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  placeholder='Time'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder='Email'
                  className='email_tag'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder='Phone (10 digits)'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength="10"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder='Restaurant Name'
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  required
                />
              </div>

              <button type="submit">
                RESERVE NOW <span><HiOutlineArrowNarrowRight /></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation;
