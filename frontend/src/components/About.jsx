import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export const About = () => {
  return (
    <section className="about" id = "about">
        <div class="container">
            <div class="banner">
                <div class="top">
                    <h1 className = "heading">ABOUT US</h1>
                    <p>The only thing we serious about is food.</p>
                </div>
                <p className="mid">
                Our story began with a simple idea - to create a place where 
                people can come together to enjoy delicious food in a welcoming
                atmosphere. Over the years, we have grown into a beloved establishment
                known for our quality ingredients, creative dishes, and exceptional
                service. We are proud to be a part of this community and look forward
                to serve you again soon.
                </p>
                <p className="mid">
                 From our humble beginnings to our current success, our commitment to excellence has never wavered. We believe in the power of good food to bring people together and create unforgettable memories.
                </p>

                <Link to = {"/"}>Explore Menu <span>
                   <HiOutlineArrowNarrowRight/>
                    </span></Link>
            </div>
            <div class="banner">
                <img src="/about.png" alt="about"/>
            </div>
        </div>
    </section>
  )
}

export default About;