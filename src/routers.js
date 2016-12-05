import React, { PropTypes } from 'react';
import { Router, Route, hashHistory, Link , IndexRoute} from 'react-router';
import Loading from './Loading/loading';
import App from './App';
import Person from './Person/Person';
import Recommend from './Recommend/Recommend';
import Release from './Release/Release';
import Spreadtrum from './Spreadtrum/Spreadtrum';


class Routers extends React.Component {
  render () {
    return(
      <div>
      <Router history={hashHistory}>
        <Route path="/" component={Loading} />
        <Route path="/login"  component={App} >
          <IndexRoute   component={Spreadtrum} />
          <Route path="/recommend" component={Recommend} />
          <Route path="/release" component={Release} />
          <Route path="/person" component={Person} />
        </Route>
     </Router>
   </div>
    )
  }
}

export default Routers;
