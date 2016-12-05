import React,{Component, PropTypes} from 'react'
import Footer from './component/footer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  getChildContext(){
  return{muiTheme: getMuiTheme()}
}

  render(){
    return(
      <div>
          {this.props.children}
            <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default App;
