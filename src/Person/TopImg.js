import React, { PropTypes } from 'react';

import Img7 from '../images/home/water/2.jpg';
import Main from "./Main";
import Avatar from './Avatar'

class TopImg extends React.Component {
  constructor(){
    super();
    this.state={
      setting:false,
      show:0
    }
  }
  handleClick(){
    this.setState({
      setting:!this.state.setting,
      show:1
    })
  }
  showAvater(){
    this.refs.avater.handleClick()
  }
  render () {
    let topimg =this.state.show==1 ? <Main />:null
        return(
        <div>
          <div className="topimg-wrap" style={{marginLeft:this.state.setting ? "-380px" :'0px'}}>

              <div className="topimg-top">
                  <div>
                      <span className="glyphicon glyphicon-chevron-left" onClick={this.handleClick.bind(this)}></span>
                  </div>
              </div>
              <div className="topimg-center">
                  <div className="center-content">
                      <p>头像</p>
                      <div>
                        <img src={Img7} style={{width:'34px',height:'34px',borderRadius:'50%'}} onClick={this.showAvater.bind(this)}/>
                      <span className="glyphicon glyphicon-chevron-right"></span>
                      </div>
                  </div>
                  <div className="center-content">
                        <p>背景</p>
                        <div>
                          <span style={{color:"#ccc"}}>更换</span>
                          <span className="glyphicon glyphicon-chevron-right"></span>
                        </div>
                  </div>
                  <div className="center-content">
                        <p>名字</p>
                        <div>
                            <span style={{color:"#ccc"}}>阴雨天</span>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </div>
                  </div>
              </div>
              <div className="topimg-buttom">
                  <div className="center-content">
                    <p>我的二维码</p>
                    <span className="glyphicon glyphicon-chevron-right"></span>
                  </div>
                  <div className="center-content">
                      <p>我的地址</p>
                      <div>
                        <span style={{paddingLeft:'40x',color:"#ccc"}}>北京市，海淀区</span>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                      </div>
                  </div>
                  <div className="center-content">
                      <p>隐私</p>
                      <span className="glyphicon glyphicon-chevron-right"></span>
                  </div>
              </div>
              <Avatar ref='avater'/>
          </div>
        {topimg}
      </div>
        )
  }
}

export default TopImg;
