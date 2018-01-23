import React from 'react';


const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Loading...</div>
    }

    //for embedding the youtube content
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail">
            <div className="video-player-wrapper">
                <iframe className="video-player" frameBorder="0" src={url}></iframe>
            </div>
            <div className ="box has-text-left">
                <div className ="video-detail__info">
                    <span className="video-detail__title"><h1 className="title is-4">{video.snippet.title}</h1></span>
                    <span className="video-detail__description">{video.snippet.description}</span>
                </div>
            </div>
        </div>
    );

}
export default VideoDetail;