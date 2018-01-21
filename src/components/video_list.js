import React from 'react';
import VideoListItem from './video_list_item';
/* The video list component does not need to record its state, it is only a container 
        for the generated video_list_items, so it will be a functional componenet 
     props = App.state.videosArray = [] - the array of videos passed in from the api grabber of App
     props.videoArray 
        acceses the video array property that was passed in from App.state.videosArray, we then iterate over it with a map iterator
        we do this instead of forEach b/c for each returns undefined and map returns a new array, our new array contains a videoList item containing video data for each video in the videosArray.
*/
const VideoList = (props) => {
    const videoItemsArray = props.videosArray.map((video) =>{
        return <VideoListItem video ={video}/> //each item gets one video from the array then return the array of video list items
    });
   
    return (
        <ul className= "video-list"> 
            {videoItemsArray} 
        </ul>
    );
}

export default VideoList;