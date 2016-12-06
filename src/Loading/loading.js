import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import Swiper from 'swiper';
import '../loading.css';
// console.log(swiper);
import img1 from '../images/loading/1.jpg';
import img2 from '../images/loading/2.jpg';
import img3 from '../images/loading/3.jpg';
import img4 from '../images/loading/4.jpg';
import img5 from '../images/login/1.png';
import Tappable from 'react-tappable';
class Loading extends React.Component {
  componentWillMount(){

  }
  componentDidMount(){
    var mySwiper = new Swiper ('.swiper-container', {

      // 如果需要分页器
      pagination: '.swiper-pagination',
    })
  }
  handleTouch(e){
    let dom = this.refs.nopagination;
    if (dom.className.indexOf('swiper-slide-active')!= -1) {
      // console.log('000');
      this.refs.dott.style.display='none';
    }else {
      this.refs.dott.style.display='block';
    }
  }
  render () {
    var myDate = new Date();
    var nian=myDate.getFullYear();
    var yue=myDate.getMonth();
    var ri=myDate.getDate();
    return (
      <div className="aa swiper-container aa">
        <div className="swiper-wrapper aa1" onTouchEnd={this.handleTouch.bind(this)}>
            <div className="swiper-slide slide1 ww"></div>
            <div className="swiper-slide slide2 ww"></div>
            <div className="swiper-slide slide3 ww"></div>
            <div className="swiper-slide slide4 ww"></div>
            <div className="swiper-slide slide5 ww" ref='nopagination'>
              <p>
                {'-'+nian +'/' +yue+ '/'+ri+ '-'}
              </p>
              <Link to='/denglu'>今日推送 >></Link>
            </div>
        </div>
        <div className="loading swiper-pagination" ref='dott'></div>
    </div>
    )
  }
}

export default Loading;
