import React from 'react'
import BannerSlider from './section-components/BannerSlider'
import Popup from './section-components/Popup';
import { useState } from 'react';

const HomeBanner = () => {
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
        <BannerSlider className="home-banner-slider">
            <div className="slider-item position-relative">
                <img className="d-none d-md-block position-relative" src={publicUrl + "assets/img/slider/23.jpeg"} />
                <img className="d-block d-md-none position-relative" src={publicUrl + "assets/img/slider/23_mob.jpg"} />
            </div>
            <div className="slider-item position-relative">
                <img className="d-none d-md-block position-relative" src={publicUrl + "assets/img/slider/19.jpeg"} />
                <img className="d-block d-md-none position-relative" src={publicUrl + "assets/img/slider/19_mob.jpg"} />
            </div>
            <div className="slider-item position-relative">
                <img className="d-none d-md-block position-relative" src={publicUrl + "assets/img/slider/20.jpeg"} />
                <img className="d-block d-md-none position-relative" src={publicUrl + "assets/img/slider/20_mob.jpg"} />
            </div>
            
            <div className="slider-item position-relative">
                <img className="position-relative" src={publicUrl + "assets/img/slider/11.jpg"} />
                {/* <img className="d-block d-md-none position-relative" src={publicUrl + "assets/img/slider/11_mob.jpeg"} /> */}
            </div>
            
            <div className="slider-item position-relative">
                <img className="d-none d-md-block position-relative" src={publicUrl + "assets/img/slider/16.jpeg"} />
                <img className="d-block d-md-none position-relative" src={publicUrl + "assets/img/slider/16_mob.jpg"} />
                <div className="video-overlay">
                    <button onClick={openPopup} className="play-video"><i className="fa-solid fa-circle-play"></i></button>
                </div>
            </div>
            
            <div className="slider-item position-relative">
                <img className="d-none d-md-block position-relative" src={publicUrl + "assets/img/slider/s11.jpeg"} />
                <img className="d-block d-md-none position-relative" src={publicUrl + "assets/img/slider/s11_mob.jpg"} />
            </div>
            
            <div className="slider-item position-relative">
                <img className="d-none d-md-block position-relative" src={publicUrl + "assets/img/slider/17.jpeg"} />
                <img className="d-block d-md-none position-relative" src={publicUrl + "assets/img/slider/17_mob.jpg"} />
            </div> 
            
            <div className="slider-item position-relative">
                <img className="d-none d-md-block position-relative" src={publicUrl + "assets/img/slider/21.jpeg"} />
                <img className="d-block d-md-none position-relative" src={publicUrl + "assets/img/slider/21_mob.jpg"} />
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

export default HomeBanner