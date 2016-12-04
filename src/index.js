import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
// import App from './App';
import Routers from './routers';


import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();



ReactDOM.render(<Routers />,document.getElementById('root'));
