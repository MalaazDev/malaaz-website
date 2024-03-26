import React, {useEffect, useState} from 'react';
import iphoneCap from "../assets/iphone.png";
import appleStore from "../assets/appleStore.png";
import pixelCap from "../assets/pixel.png";
import playStore from "../assets/playStore.png";
import './Intro.css';

const Intro = () => {
  const handleStoreClick = (url) => {
    window.open(url, '_blank');
  };

  const words = ['منازل', 'شقق', 'أراضي'];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animate, setAnimate] = useState(true); // State to trigger animations

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(false); // Trigger the exit animation

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimate(true); // Trigger the entrance animation for the next word
      }, 300); // This timeout should match the duration of the exit animation
    }, 2000); // Change the word every 3 seconds (includes animation time)

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, );

  return (
      <div className="IntroBackground">
        <div className="content-container">

          <div className="screen-caps-container">
            <div className="store-container">
              <img src={iphoneCap} className="app-screen-cap" alt="iPhone screen cap" />
              <button className="store-button" onClick={() => handleStoreClick('https://apps.apple.com/us/app/malaaz/id6451073231')}>
                <img src={appleStore} className="store-logo" alt="Download on the Apple Store" />
              </button>
            </div>
            <div className="store-container">
              <img src={pixelCap} className="app-screen-cap" alt="Pixel screen cap" />
              <button className="store-button" onClick={() => handleStoreClick('https://play.google.com/store/apps/details?id=com.malaaz.Malaaz')}>
                <img src={playStore} className="store-logo" alt="Get it on Google Play" />
              </button>
            </div>
          </div>

          <div className="main-text-container">

            <p className="main-text">
              تطبيق واحد لكل احتياجاتك من شراء، تأجير، و بيع

              <span className={`changer ${animate ? 'slide-in' : 'slide-out'}`}> {words[currentWordIndex]} </span>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Intro;
