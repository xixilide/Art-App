import React,{Component, PropTypes} from 'react'
import Footer from './component/footer';

class App extends Component {

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
