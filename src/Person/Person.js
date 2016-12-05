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
            height: 130,
            width: 130,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };
    return(
      <div>
          <div className="person-wrap">
             <Paper style={style} zDepth={2} circle={true} >
              <img src={Img7} style={{width:'100%',height:'100%',borderRadius:'50%'}}></img>
              </Paper>
            <p>阴雨天</p>
            <div>
              <p>关注</p>
              <p>发布</p>
              <p>访客</p>
            </div>
          </div>
      </div>
    )
  }
}

export default Person;
