import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //import our search bar component as a default import

//import css styles
import './assets/css/main.css';


const YOUTUBE_API_KEY = 'AIzaSyA6rw_zROa1rAqzbCgVLrKbSZiZ32CXpoQ';







// index is the root of our application every other application will be imported here
// one component for every application.
// this is a function based component, it is simply used to render jsx -- we use class based components when we need to track state and such
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App/>,document.querySelector("#root"));