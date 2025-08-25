import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <section className='notFound' id="notFound">
      <div className="contain">
        <img src="/notFound.svg" alt="notFound" />
        <h1>LOOKS LIKE YOU ARE LOST</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to={"/"} className="homeButton">
          Back To Home <span><HiOutlineArrowNarrowRight /></span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
