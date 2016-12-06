import React, { PropTypes } from 'react';
import { Router, Route, hashHistory, Link , IndexRoute} from 'react-router';
import Loading from './Loading/loading';
import App from './App';
import Person from './Person/Person';
import Recommend from './Recommend/Recommend';
import Shanze from './Recommend/Shanze';
import Zengfan from './Recommend/Zengfan';
import Baxi from './Recommend/Baxi';


import Release from './Release/Release';
import Spreadtrum from './Spreadtrum/Spreadtrum';
import ClaDraw from './Spreadtrum/classify/huihua';

import Cjy from './Spreadtrum/show/cjy';
import Xiaoge from './Spreadtrum/show/xiaoge';

import Login from './Login/login';
import Zhuce from './Zhuce/Zhuce';

class Routers extends React.Component {
  render () {
    return(
      <div>
      <Router history={hashHistory}>
        <Route path="/" component={Loading} />
        <Route path="/denglu" component={Login}/>
        <Route path="/zhuce" component={Zhuce} />
        <Route path="/login"  component={App} >
          <IndexRoute   component={Spreadtrum} />
           <Route path="/huihua" component={ClaDraw} />

           <Route path="/cjy" component={Cjy} />
           <Route path="/xiaoge" component={Xiaoge} />
          <Route path="/recommend" component={Recommend} />
          <Route path="/shanze" component={Shanze} />
          <Route path="/baxi" component={Baxi} />
          <Route path="/zengfan" component={Zengfan} />
          <Route path="/release" component={Release} />
          <Route path="/person" component={Person} />
        </Route>
     </Router>
   </div>
    )
  }
}

export default Routers;
