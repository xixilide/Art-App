import React, { PropTypes } from 'react';
import Img1 from "../images/person/1.png";
import Img2 from "../images/person/2.png";
import Img3 from "../images/person/3.png";
import Img4 from "../images/person/4.png";
import Img5 from "../images/person/5.png";
import Img6 from "../images/person/6.png";
import Img7 from '../images/home/water/2.jpg';
import Paper from 'material-ui/Paper'



class Person extends React.Component {
  render () {
    const style = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };
    return(
      <div className="person-wrap">
          <div className="person-top clearfix">
            <div className="person-top-icon">
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="glyphicon glyphicon-cog"></span>
            </div>
            <div>
             <Paper style={style} zDepth={2} circle={true} >
              <img src={Img7} style={{width:'100%',height:'100%',borderRadius:'50%'}}></img>
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
                <span className="glyphicon glyphicon-chevron-right"/>
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
            footer
          </div>
      </div>
    )
  }
}

export default Person;
