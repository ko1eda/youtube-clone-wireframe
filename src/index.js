import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //import our search bar
import VideoList from './components/video_list';
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
        this.state = { videosArray: [] }; //an array to save the videosArray we load in from our api at every state 
        YTSearch({key:API_KEY, term:'Top 10 Anime Betrayals', results:5},(videosArray) => {
            
            return this.setState( {videosArray} ); //dont have to specify videosArray: videosArray bc in ES6 it does it automatically if matching
        });
    }

    render (){
        return (
            <div className ="container">
                <SearchBar/>
                {/* pass the state of the App.state.videosArray [] into the video list as a prop(erty) */}
                <VideoList videosArray = {this.state.videosArray}/>
            </div>
        )
    }

}
ReactDOM.render(<App/>,document.querySelector("#root"));