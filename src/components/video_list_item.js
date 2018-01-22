import React from 'react';

/*
 VideoListItem = ({ going to explain the argument below })
    {video,} - essentially you have a prop object you want to destructure with a property called {video} inside it (that we defined when we passed it in in video_list, but you called call it anything)
     and by putting it in brackets { } you are saying unpack this video property from the prop object and store its contents in a variable of the same name.
    {, video:{kind}} - so since we want specifc properties of that video as well as the video object, we need to unpack those properties sperately 
        so what this is saying is that video is an object with a property called kind inside it, and to unpack the contents of that 
        property called kind whatever they may be and store them in a variable of the same name.
    Then { , video:{kind, snippet:{title} }} 
        so what this is saying is that the video object also has a property called snippet and that that snippet
        property is actually an object with a property called title, so this is a nested destructured statement it then unpacks that as well
  *Note if you just wanted to destructure an idividual property you would have to pass in that property as a prop to videoListItem and then just use { propertyNameThatYouGaveItWhenYouPassedItIn, otherPropertyName:{iGuessThisOneIsNested} } and that would destructure it
*/
const VideoListItem = ({video, video:{kind, snippet:{title}} }) =>{
    console.log(video);
    // console.log(kind);
    // console.log(title);
   
    return (
        <li className ="video-list-item"> 
            <div className="video-list-item__image-box">
            video
            </div> 
            <div className="video-list-item__text-wrapper">
            <span className="video-list-item__text">{title}</span>
            </div>
        </li>
    );

}

export default VideoListItem;