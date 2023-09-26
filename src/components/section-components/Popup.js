import React, { useEffect, useState } from 'react';

const Popup = ({videoId, onClose }) => {

  // const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsActive(true);
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, []);


  return (
    // <div className={`popup-main video-popup ${isActive ? 'active' : ''}`}>
    <div className={`popup-main video-popup ${onClose ? 'active' : ''}`}>
      <div className="popup-container">
        <div className="popup-wrap">
          <button onClick={onClose} className="close-popup">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="popup-holder">
            <div className="popup-block">
              <div className="popup-content">

                <div className="youtube-popup">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  >
                  </iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;