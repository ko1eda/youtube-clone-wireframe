import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';


// index is the root of our application every other application will be imported here
// one component for every application
const App = () => <div><h1>Hello!</h1></div>;

ReactDOM.render(<App/>,document.querySelector("#root"));