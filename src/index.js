import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //import our search bar component as a default import
import YTSearch from './modules/yt_api_search';
//import css styles
import './assets/css/main.css';
const API_KEY = 'AIzaSyA6rw_zROa1rAqzbCgVLrKbSZiZ32CXpoQ';




// index is the root of our application every other application will be imported here
// turned this into a class based component bc we need to 
// ytsearch takes an object of parameters for the search and returns an array of video objects,
// it is inside the cosntructor function so that when the APP is rendered on the page the it will update its state and populate its videos state array
// default videos 
class App extends Component {
    constructor(props){
        super(props);
        this.state = { vidoes: [] }; //an array to save the videos we load in from our api at every state 
        YTSearch({key:API_KEY, term:'Top 10 Anime Betrayals', results:5},(videos) => {
            return this.setState( {videos} ); //dont have to specify videos: videos bc in ES6 it does it automatically if matching
        });
    }

    render (){
        return (
            <div>
                <SearchBar/>
            </div>
        )
    }

}
ReactDOM.render(<App/>,document.querySelector("#root"));