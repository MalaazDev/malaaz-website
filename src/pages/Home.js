import React from 'react';
import './Home.css';
import Features from "../components/Features";
import Intro from "../components/Intro";
import Stats from "../components/Stats";
import YoutubeEmbedding from "../components/YoutubeEmbedding";

const Home = () => {
    return (
        <div className='HomeBackground'>
            <Intro />
            <Stats />
            <YoutubeEmbedding />
            <Features />
        </div>
    );
};

export default Home;
