import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './zengfan.css';
import Routers from './routers';
import ClaDraw from './Spreadtrum/classify/huihua';

import './person.css'
import './recommend.css'
import './spre.css'

import './swiper.min.css';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<Routers />,document.getElementById('root'));
