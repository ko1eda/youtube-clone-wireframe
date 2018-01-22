import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //import our search bar
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from './modules/yt_api_search';

//import css styles
import 'bulma/css/bulma.css'
import './assets/css/main.css';
 
const API_KEY = 'AIzaSyA6rw_zROa1rAqzbCgVLrKbSZiZ32CXpoQ';
 /* 
    curly braces are used to place javascript within html tags only otherwise we don't use curly braces.
    index is the root of our application every other application will be imported here.
    ytsearch takes an object of parameters for the search and returns an array of video objects,
        it is inside the cosntructor function so that when the APP is rendered on the page the it will update its state and populate its videos state array
         default videos 
*/

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videosArray: [],
            selectedVideo: null
        }; 

        //an array to save the videosArray we load in from our api at every state 
        YTSearch({key:API_KEY, term:'Top 10 Anime Betrayals', results:7},(videosArray) => { 
            return this.setState({
                videosArray: videosArray,
                selectedVideo: videosArray[0]
            });
        });

    }

    // onVideoSelect is a method defined on the videoList props object, it is then passed to VideoListItems props object where it is called when a list        item is clicked.
    // When the item is clicked it returns the the function with the video object from the VideoListItem container passed in as the parameter
    // When this method is returned it updates the state of App.state.selectedVideo with setState and re-renders all the child components pushing the           selected video to VideoDetail componet which then updates the video player. 
    render (){
        return (
            <div className ="container">
                <div className="columns is-centered">
                    <SearchBar/>
                </div>

                <div className="columns is-centered">
                    <VideoDetail video= {this.state.selectedVideo} />
                </div>

                <div className="columns is-centered">
                    <VideoList
                    onVideoSelect = {(selectedVideo) =>this.setState({selectedVideo})} 
                    videosArray = {this.state.videosArray}
                    />
                </div>
                
            </div>
        )
    }

}
ReactDOM.render(<App/>,document.querySelector("#root"));