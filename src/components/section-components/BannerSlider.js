import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const BannerSlider = ({ settings, className, children }) => {
  const defaultSettings = {
    dots: false,
    infinite: true,
    fade: false,
    speed: 200,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-prev"><i className="fa-solid fa-chevron-left"></i></div>,
    nextArrow: <div className="slick-next"><i className="fa-solid fa-chevron-right"></i></div>,
  };

  const mergedSettings = {
    ...defaultSettings,
    ...(settings || {}), // Merge with settings if provided
  };

  return (
    <Slider {...mergedSettings} className={className}>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </Slider>
  );
};

export default BannerSlider;