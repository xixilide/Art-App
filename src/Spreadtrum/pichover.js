import React, { PropTypes } from 'react'
import Img1 from '../images/home/first/midnav/1.jpg'
import Img2 from '../images/home/first/midnav/2.jpg'
import Img3 from '../images/home/first/midnav/3.jpg'
import Img4 from '../images/home/first/midnav/4.jpg'
import Img5 from '../images/home/first/midnav/5.jpg'
import Img6 from '../images/home/first/midnav/6.jpg'

class Pichover extends React.Component {
  handleTouch(e){
    e.preventDefault();
  }
  render () {
  return(
    <div　className="midnav">
      <ul onTouchMove={this.handleTouch.bind(this)}>
        <li> <a href="#"><img　src= {Img1}/> </a></li>
        <li> <a href="#"><img　src= {Img2}/> </a></li>
        <li> <a href="#"><img　src= {Img3}/> </a></li>
        <li> <a href="#"><img　src= {Img4}/> </a></li>
        <li> <a href="#"><img　src= {Img5}/> </a></li>
        <li> <a href="#"><img　src= {Img6}/> </a></li>
      </ul>
    </div>
  )
  }
}

export default Pichover;
