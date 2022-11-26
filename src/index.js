import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BackgroundVideo from './Components/BackgroundVideo';
import App from './Pages/Main';
import * as serviceWorker from './Components/serviceWorker';


ReactDOM.render(<BackgroundVideo />, document.getElementById('background-root'));
ReactDOM.render(<App />, document.getElementById('root'));

let element = document.getElementById('index-loading')
element.style.visibility = "hidden";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();