import React from 'react';
import iphoneCap from "../assets/iphone.png";
import appleStore from "../assets/appleStore.png";
import pixelCap from "../assets/pixel.png";
import playStore from "../assets/playStore.png";
import './Home.css';


const Home = () => {
    const handleIOSClick = () => {
        window.location.reload(); // Reloads the page when the logo is clicked
    };

    const handleAndroidClick = () => {
        window.location.reload(); // Reloads the page when the logo is clicked
    };

    return (
        <div className="Background">
            <div className="Content-container">
                <h1 className="Main-text">
                    Introducing <span className="highlighted-text">Malaaz!</span><br /><br />
                    The new way for buying, selling, and renting property in
                    Algeria.
                </h1>

                <div className="Screen-caps-container">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                        <img src={iphoneCap} className="App-ScreenCap" alt="iphone" onClick={handleIOSClick} />
                        <img src={appleStore} className="App-store" alt="appleStore" onClick={handleIOSClick} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                        <img src={pixelCap} className="App-ScreenCap" alt="pixel" onClick={handleAndroidClick} />
                        <img src={playStore} className="App-store" alt="playStore" onClick={handleAndroidClick} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;