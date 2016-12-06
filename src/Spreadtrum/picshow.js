import React, { PropTypes } from 'react'
import Img1 from '../images/home/first/top/1.jpg'
import Img2 from '../images/home/first/top/2.jpg'
import Img3 from '../images/home/first/top/3.jpg'
class Picshow extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper ('.swiper-container1', {
      initialSlide :1,
      autoplay: 5000,
      pagination: '.swiper-pagination1'
    })
  }
  handleTouch(e){
    let dom = this.refs.nopagination;
    if (dom.className.indexOf('swiper-slide-active')!= -1) {

      this.refs.dott.style.display='none';
    }else {
      this.refs.dott.style.display='block';
    }
  }
  render () {
    let styles={
      img:{
        display:'block',
        width:'100vw',
        height:'auto'
      }
    }
  return(
    <div className="picbox">
      <div className="swiper-container1">
        <div className="swiper-wrapper" onTouchEnd={this.handleTouch.bind(this)}>
            <div className="swiper-slide slide1"><img　src= {Img1} style={styles.img}/></div>
            <div className="swiper-slide slide2"><img　src= {Img2} style={styles.img}/></div>
            <div className="swiper-slide slide3" ref='nopagination'><img　src= {Img3} style={styles.img}/></div>
        </div>
        <div className="swiper-pagination1" ref='dott'></div>
    </div>
    </div>
  )
  }
}

export default Picshow;
