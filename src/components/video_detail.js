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
            <iframe className="video-player" src={url}></iframe>
            <div className ="video-detail__info">
                <span className="video-detail__title">{video.snippet.title}</span>
                <span className="video-detail__description">{video.snippet.description}</span>
            </div>
        </div>
    );

}
export default VideoDetail;