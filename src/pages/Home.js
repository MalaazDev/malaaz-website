import React from 'react';
import iphoneCap from "../assets/iphone.png";
import appleStore from "../assets/appleStore.png";
import pixelCap from "../assets/pixel.png";
import playStore from "../assets/playStore.png";
import './Home.css';

const Home = () => {
    const handleStoreClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="policy">
            <div className="content-container">
                <h1 className="main-text">
                    Trouvez la maison de vos rêves ou diffusez votre bien sans effort!
                </h1>
                <p className="sub-text">
                    Bienvenue a <strong>Malaaz</strong>,
                    l'application immobilière révolutionnaire qui transforme la façon dont vous cherchez, vendez ou louez des propriétés. Que vous soyez à la recherche d'une nouvelle maison ou que vous souhaitiez proposer votre bien à la vente ou à la location, Malaaz est l'outil idéal pour vous.
                </p>

                <div className="preview-container">
                    <div className="stats-container">
                        <span className="highlighted-text"><strong>1.5k+ </strong></span>
                        <span className="downloads">Téléchargements</span>

                        <span className="highlighted-text"><strong>100+ </strong></span>
                        <span className="partners">Partenariats</span>

                        <span className="highlighted-text"><strong>10k+ </strong></span>
                        <span className="properties">propriétés</span>

                        {/*<div className="rating">*/}
                        {/*  /!*<img src={starIcon} alt="Star" className="star-icon" />*!/*/}
                        {/*  <span>4.8</span>*/}
                        {/*</div>*/}
                    </div>
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
                </div>
            </div>
            <div className="features-container">
                <div className="feature-block">
                    <p className="feature-title">
                        <strong>Large Choix de Propriétés</strong>
                    </p>
                    <p className="feature-description">
                        Découvrez un vaste catalogue de biens en vente et en location dans votre région.
                    </p>
                </div>
                <div className="feature-block">
                    <p className="feature-title">
                        <strong>Publication Facile</strong>
                    </p>
                    <p className="feature-description">
                        Postez votre annonce en quelques clics et atteignez des million d'acheteurs ou de locataires potentiels.
                    </p>
                </div>
                <div className="feature-block">
                    <p className="feature-title">
                        <strong>Recherches Personnalisées</strong>
                    </p>
                    <p className="feature-description">
                        Utilisez nos filtres avancés pour trouver exactement ce que vous cherchez, que ce soit un studio en centre-ville ou une maison de campagne.
                    </p>
                </div>
                <div className="feature-block">
                    <p className="feature-title">
                        <strong>Communication Directe</strong>
                    </p>
                    <p className="feature-description">
                        Contactez les propriétaires ou les agences directement depuis l'application pour poser vos questions ou planifier une visite.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
