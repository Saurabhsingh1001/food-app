import React from 'react'
import { BsFillPlayCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src="about-background.png" alt="aboutimage"/>
        </div>
        <div className="about-section-image-container">
            <img src ="about-background-image.png" alt="aboutimage2" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">
                About
            </p>
            <h1 className="primary-heading">
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className="primary-text">
                loreum ipsum dolar sit amet consectetur. Non tincidunt magna non at
                elite. Bolar turpis molestie dui magnis faciliate at fringilla quam.
            </p>
            <p className="primary-text">
                Non tincident magna non at elite. Dolar turpis molestie dui magnis
                facilisis at fringilla quam.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button"> Learn More</button>
                <button className="watch-video-button"><BsFillPlayCircleFill />Watch Video</button>
            </div>
        </div>
        
      
    </div>
  )
}

export default About
