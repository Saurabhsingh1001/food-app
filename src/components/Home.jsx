import React from 'react'
import Navbar from './Navbar.jsx';

import { FiArrowRight } from "react-icons/fi"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src="home-banner-background.png" alt=""/>
        </div>
        <div className="home-text-section">
            <h1 className="primary-heading">
                Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
                Healthy switcher chefs do all the prop work, like peeding,
                chopping
                & marinating, as you can cook a fresh food.
            </p>
            <button className="secondary-button">
                Order Now<FiArrowRight/>
            </button>
        </div>
        <div className="home-image-container">
            <img src="about-background-image.png" alt="backimage"/>
        </div>
      </div>
    </div>
  )
}

export default Home
