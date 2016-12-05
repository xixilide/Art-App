import React, { PropTypes } from 'react'
import {  Link} from 'react-router';
import Img1 from '../images/littlepic/9.png'
import Img2 from '../images/littlepic/7.png'
import Img3 from '../images/littlepic/3.png'
import Img4 from '../images/littlepic/5.png'
class Footer extends React.Component {
  render () {
    let styles = {
      img:{
        width:"12vw",
        height:'8vh'
      }
    }
  return(
    <div className="nav-footer">
        <Link to="/login"  onlyActiveOnIndex={true} ><img src={Img1} style={styles.img}/></Link>
        <Link to="/recommend"> <img src={Img2} style={styles.img}/></Link>
        <Link to="/release"> <img src={Img3} style={styles.img}/></Link>
        <Link to="/person"> <img src={Img4} style={styles.img}/></Link>
    </div>
  )
  }
}

export default Footer;
