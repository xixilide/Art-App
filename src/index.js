import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Routers from './routers';
import './person.css'


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<Routers />,document.getElementById('root'));
