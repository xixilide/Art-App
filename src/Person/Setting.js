import React, { PropTypes } from 'react';
import Main from "./Main"

class Setting extends React.Component {
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

  render () {
      let setting2 =this.state.show==1 ? <Main /> :null
      return(
      <div>
        <div className="setting-wrap" style={{marginLeft:this.state.setting ? "-380px" :'0px'}}>
            <div className="setting-top" >
              <div>
              <span className="glyphicon glyphicon-chevron-left" onClick={this.handleClick.bind(this)}></span>
              </div>
            </div>
            <div className="setting-center">
                  <div className="center-content">
                    <p>自动离线缓存</p>
                    <p><span style={{color:'red'}}>开</span>/关</p>
                  </div>
                  <div className="center-content">
                    <p>自动离线缓存</p>
                      <span className="glyphicon glyphicon-chevron-right" ></span>
                  </div>
                  <div className="center-content">
                      <p>使用流量状态下提醒</p>
                      <p>开<span style={{color:'red'}}>/关</span></p>
                  </div>
            </div>
            <div className="setting-buttom">
                <div className="center-content">
                  <p>消息推送</p>
                </div>
                <div className="center-content">
                  <p>意见反馈</p>
                </div>
                <div className="center-content">
                    <p>当前版本</p>
                </div>
                <div className="center-content">
                    <p>关于艺集</p>
                </div>
            </div>
            <div className="setting-footer">
              <div className="sign-in">
                <p>退出登陆</p>
              </div>
              <p className="now">当前版本１．０．４２</p>
            </div>
        </div>
      </div>
      )
  }
}

export default Setting;
