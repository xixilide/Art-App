import React, { PropTypes } from 'react';
import Img1 from "../images/person/1.png";
import Img2 from "../images/person/2.png";
import Img3 from "../images/person/3.png";
import Img4 from "../images/person/4.png";
import Img5 from "../images/person/5.png";
import Img6 from "../images/person/6.png";
import Img7 from '../images/home/water/2.jpg';
import Img8 from '../images/littlepic/12.jpg';

import Paper from 'material-ui/Paper';
import Link from 'react-router';
import Setting from "./Setting";
import TopImg from "./TopImg"

class Main extends React.Component {
  constructor(){
    super();
    this.state={
      setting:false,
      show:0,
      topimg:false,
    }
  }
  handleClick(){
    this.setState({
      setting:!this.state.setting,
      show:1
    })
  }

handleClick2(){
  this.setState({
    topimg:!this.state.topimg,
    show:3
  })
}
  render () {
    const style = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };
      let setting =this.state.show==1 ? <TopImg />:""
    let topimg=this.state.show==3?<Setting />:''
    return(
      <div>
        {setting}
        {topimg}
      <div className="person-wrap" style={{marginLeft:this.state.setting ? "-380px" :'0px',overflow:this.state.setting ?'hidden':'none'}}>
            <div className="person-top clearfix">
                <div className="person-top-icon">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="glyphicon glyphicon-cog" onClick={this.handleClick2.bind(this)}></span>
                </div>
                <div>
                    <Paper style={style} zDepth={2} circle={true} >
                      <img src={Img7} style={{width:'100%',height:'100%',borderRadius:'50%'}}  onClick={this.handleClick.bind(this)}/>
                    </Paper>
                </div>
                <div>
                  <p>阴雨天</p>
                </div>
                <div className="person-watch">
                  <p>关注</p>
                  <p>发布</p>
                  <p>访客</p>
                </div>
            </div>
            <div className="person-center">
              <div className="center-top">
                <div className="art">
                  <p>艺象云集</p>
                </div>
                <div className="All">
                  <span>ALL</span>
                  <span className="glyphicon glyphicon-chevron-right" />
                </div>
              </div>
              <div className="center-img">
                <div><img src={Img2}/></div>
                <div><img src={Img3}/></div>
                <div><img src={Img4}/></div>
              </div>
              <div className="center-buttom">
                <p>订阅/11</p>
                <p>订阅/9</p>
                <p>订阅/49</p>
              </div>
            </div>
            <div className="person-bottom">
              <div className="person-bottom-img">

              </div>
              <div className="person-bottom-b">
                <img src={Img5}/>
                <img src={Img6}/>
              </div>
            </div>
        </div>
      </div>
      )
  }
}

export default Main;
