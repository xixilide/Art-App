import React, { PropTypes } from 'react';

import Img7 from '../images/home/water/2.jpg';

class TopImg extends React.Component {
  render () {
        return(
          <div className="topimg-wrap">
              <div className="topimg-top">
                <div>
                <span className="glyphicon glyphicon-chevron-left"></span>
                </div>
              </div>
              <div className="topimg-center">
                    <div className="center-content">
                      <p>头像</p>
                      <div>
                        <img src={Img7} style={{width:'34px',height:'34px',borderRadius:'50%'}}/>
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
          </div>
        )
  }
}

export default TopImg;
