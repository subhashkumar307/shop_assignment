import React from 'react'
import BannerSlider from './section-components/BannerSlider'
import Popup from './section-components/Popup';
import { useState } from 'react';

const HomeBannerV1 = () => {
    let publicUrl = process.env.PUBLIC_URL + '/';

    const [isPopupOpen, setPopupOpen] = useState(false);
    const videoId = 'iwNiHMWtka8';

    const openPopup = () => {
        setPopupOpen(true);
        // setTimeout(function(){  setPopupOpen(true); }, 500);
    };
  
    const closePopup = () => {
        setPopupOpen(false);
        // setTimeout(function(){ setPopupOpen(false); }, 500);
    };
  return (
    <>
        <BannerSlider className="home-banner-slider partner-slider">
            <div className="slider-item position-relative">
                <img className="position-relative" src={publicUrl + "assets/img/slider/s11.jpeg"} />
            </div>
            <div className="slider-item position-relative">
                <img className="position-relative" src={publicUrl + "assets/img/slider/s2.jpg"} />
            </div>
            <div className="slider-item position-relative">
                <img className="position-relative" src={publicUrl + "assets/img/slider/s3.jpg"} />
            </div>
           
        </BannerSlider>

        {isPopupOpen && (
            <div className="fullscreen-popup">
                <Popup videoId={videoId} onClose={closePopup} />
            </div>
        )}
    </>
  )
}

export default HomeBannerV1