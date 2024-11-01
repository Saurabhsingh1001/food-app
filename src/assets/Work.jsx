import React from 'react'
import image1 from '/pick-meals-image.png'
import image2 from '/choose-image.png'
import image3 from '/delivery-image.png'

const Work = () => {

  const workInfoData = [
    {
        image: image1,
        title: "Pick Meals",
        text: "loreum ipsum dolar sit amet consectetur. Non tincidunt magna non at elite.",

    },
    {
        image: image2,
        title: "Choose How Often",
        text: "loreum ipsum dolar sit amet consectetur. Non tincidunt magna non at elite.",
        
    },
    {
        image: image3,
        title: "Fast Deliveries",
        text: "loreum ipsum dolar sit amet consectetur. Non tincidunt magna non at elite.",
        
    }
  ]
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <p className="primary-subheading">How It Works</p>
            <p className="primary-text">
                loreum ipsum dolar sit amet consectetur. Non tincidunt magna non at elite.
            </p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoData.map((data)=>{
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                })
            }
        </div>
      
    </div>
  )
}

export default Work
