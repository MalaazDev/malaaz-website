import './YoutubeEmbeddings.css';

const YoutubeEmbedding = () => {
    const videoId = "36Pq2t6Pvlk";

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-container">
            <div className="divider"></div>
            <iframe
                className="video-iframe"
                height="560"
                width="315"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="divider"></div>
        </div>
    );
};


export default YoutubeEmbedding;
