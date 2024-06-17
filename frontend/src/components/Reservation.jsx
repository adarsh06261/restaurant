import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const navigate = useNavigate();

  const restaurants = [
    { value: '1', label: 'Urvashi Restaurant' },
    { value: '2', label: 'Backyard' },
    { value: '3', label: 'Munna ka Dhaba' },
    { value: '4', label: 'Hotel Sahil' },
    { value: '5', label: 'Purnima Ka Chand' },
    { value: '6', label: 'Chandni Hotel' },
    { value: '7', label: 'Infinite is not Defined ?' },
    { value: '8', label: 'Akar bakar Assi Nubbe Hotel' },
  ];

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time, restaurantName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setRestaurantName("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
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
                />
                <input
                  type="text"
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder='Date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder='Time'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder='Email'
                  className='email_tag'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder='Phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <Select
                  options={restaurants}
                  value={restaurants.find(restaurant => restaurant.value === restaurantName)}
                  onChange={option => setRestaurantName(option.value)}
                  placeholder="Select a Restaurant"
                  isSearchable
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
