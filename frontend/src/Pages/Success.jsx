import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <section className="success" id="success">
      <div className="container">
        <div className="success-content">
          <div className="success-icon">✅</div>
          <h1>Reservation Successful!</h1>
          <p>Your table has been reserved successfully. We look forward to serving you!</p>
          <p className="countdown">Redirecting to Home in {countdown} seconds...</p>
          <Link to={"/"} className="homeButton">
            Back To Home <span><HiOutlineArrowNarrowRight /></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Success;
