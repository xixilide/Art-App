import React, { PropTypes } from 'react';
import Swiper from 'swiper';
import Img1 from '../images/home/first/midnav/1.jpg'
import Img2 from '../images/home/first/midnav/2.jpg'
import Img3 from '../images/home/first/midnav/3.jpg'
import Img4 from '../images/home/first/midnav/4.jpg'
import Img5 from '../images/home/first/midnav/5.jpg'
import Img6 from '../images/home/first/midnav/6.jpg'

class Pichover extends React.Component {
componentDidMount(){
  var mySwiper = new Swiper('.swiper-container',{
     slidesPerView : 2.5,
     spaceBetween : 10
     })
}

  render () {
    let styles={
      img:{
        width:'40vw',
        height:'15vh'
      }
    }
  return(
    <div　className="midnav" >
      <div className="swiper-container" >
        <div className="swiper-wrapper" >
            <div className="swiper-slide lide" ><img　src= {Img1} style={styles.img}/></div>
            <div className="swiper-slide lide" ><img　src= {Img2} style={styles.img}/></div>
            <div className="swiper-slide lide" ><img　src= {Img3} style={styles.img}/></div>
            <div className="swiper-slide lide" ><img　src= {Img4} style={styles.img}/></div>
            <div className="swiper-slide lide" ><img　src= {Img5} style={styles.img}/></div>
            <div className="swiper-slide lide" ><img　src= {Img6} style={styles.img}/></div>
        </div>
    </div>
    </div>
  )
  }
}

export default Pichover;
