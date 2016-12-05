import React, { PropTypes } from 'react'
import {  Link} from 'react-router';
import fbh from '../images/littlepic/2.png'
import fb from '../images/littlepic/3.png'
import grh from '../images/littlepic/4.png'
import gr from '../images/littlepic/5.png'
import tjh from '../images/littlepic/6.png'
import tj from '../images/littlepic/7.png'
import zx from '../images/littlepic/8.png'
import zxh from '../images/littlepic/9.png'

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
        <Link to="/login"  onlyActiveOnIndex={true} ><img src={zx} alt="" style={styles.img}/></Link>
        <Link to="/recommend">
          <img src={tj} style={styles.img} className="huan"/>

          </Link>
        <Link to="/release"> <img src={fb} style={styles.img}/></Link>
        <Link to="/person"> <img src={gr} style={styles.img}/></Link>
    </div>

  )

  }
}

export default Footer;
