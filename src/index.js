import _ from 'lodash';

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
        
        this.videoSearch('shrek is love');
    };
    //videosArray is the parameter passed to the callback function to store the array of returned videos stripped from the returned response object .data json object
    videoSearch(searchTerm){

        YTSearch({key:API_KEY, term:searchTerm, results:8}, (videosArray) =>{
            return this.setState(  
                {
                    videosArray :videosArray,
                    selectedVideo: videosArray[0]
                } 
            );
        });
    }


    // onVideoSelect is a method defined on the videoList props object, it is then passed to VideoListItems props object where it is called when a list        item is clicked.
    // When the item is clicked it returns the the function with the video object from the VideoListItem container passed in as the parameter
    // When this method is returned it updates the state of App.state.selectedVideo with setState and re-renders all the child components pushing the           selected video to VideoDetail componet which then updates the video player. 
    //SearchBar.props.onVideoSearch = (searchTerm) => {this.videoSearch(searchTerm)} essentially we defined a method on searchbars props object that takes a parameter called searchTerm and then calls our App.videoSearchMethod with that term passed in 
    render (){
        /* 
            this uses lodash to convert our search function to a debounced function meaning every time onVideoSearch method is called from our search bar i      will call our App videoSearch function only after a set timer so that it doesn't update too quickly
            it will call our function 300 ms after each letter we enter and will not execute the next one until 300 after the first has been called
        */
        const debouncedVideoSearch = _.debounce((searchTerm)=>this.videoSearch(searchTerm),300);

        return (
            <div className ="container">
                <div className="columns is-mobile is-centered is-marginless">
                    <SearchBar onVideoSearch={debouncedVideoSearch} />
                </div>

                <div className="columns">
                    <div className="column is-8">
                        <VideoDetail video= {this.state.selectedVideo}/>
                    </div>
                    <div className="column is-4">
                        <VideoList
                        onVideoSelect = {(selectedVideo) =>this.setState({selectedVideo})} 
                        videosArray = {this.state.videosArray}
                        />
                    </div>
                </div>

                {/* <div className="columns is-centered">
                  
                </div> */}
                
            </div>
        )
    }

}
ReactDOM.render(<App/>,document.querySelector("#root"));