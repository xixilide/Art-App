import React, { PropTypes } from 'react';
import TopImg from "./TopImg"

class Avatar extends React.Component {
  constructor(){
    super();
    this.state={show:false}
  }
  handleClick(){
    this.setState({show:!this.state.show})
  }
  render () {
    let styles={
      display:this.state.show? 'block' : 'none'
    };
    return(
      <div className="avatar-wrap" style={styles}>
          <div className="avatar-bottom">
              <div className="avatar-choose">
                  <p>进入相册选择</p><br/>
                  <p>拍一张</p>
              </div>
              <div style={{backgroundColor:"#fff" ,padding:'12px'}}>
                <p style={{fontSize:'18px'}} onClick={this.handleClick.bind(this)}>取消</p>
              </div>
          </div>
      </div>
    )
  }
}

export default Avatar;
