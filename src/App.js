import React,{Component, PropTypes} from 'react'
import MeunBar from './component/menuBar';
import Footer from './component/footer';
import Header from './component/header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  getChildContext() {
   return {muiTheme: getMuiTheme()};
 }
  render(){
    return(
      <div>
        <Header />
          <MeunBar />
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
