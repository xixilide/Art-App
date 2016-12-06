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
  handleClick1(){
    this.refs.zhanxun.src=zxh;
    this.refs.tuijian.src=tj;
    this.refs.geren.src=gr;
    this.refs.fabu.src=fb;
  }
  handleClick2(){
    this.refs.zhanxun.src=zx;
    this.refs.tuijian.src=tjh;
    this.refs.geren.src=gr;
    this.refs.fabu.src=fb;
  }
  handleClick3(){
    this.refs.zhanxun.src=zx;
    this.refs.tuijian.src=tj;
    this.refs.geren.src=gr;
    this.refs.fabu.src=fbh;
  }
  handleClick4(){
    this.refs.zhanxun.src=zx;
    this.refs.tuijian.src=tj;
    this.refs.geren.src=grh;
    this.refs.fabu.src=fb;
  }
  render () {
    let styles = {
      img:{
        width:"12vw",
        height:'8vh'
      }
    }

  return(

    <div className="nav-footer">

        <Link to="/login" onlyActiveOnIndex={true} onClick={this.handleClick1.bind(this)}><img ref='zhanxun' src={zx} alt="" style={styles.img}/></Link>
        <Link to="/recommend" onClick={this.handleClick2.bind(this)}>
          <img src={tj} style={styles.img} className="huan" ref='tuijian'/>
          </Link>
        <Link to="/release" onClick={this.handleClick3.bind(this)}> <img ref='fabu' src={fb} style={styles.img}/></Link>
        <Link to="/person" onClick={this.handleClick4.bind(this)}> <img ref='geren' src={gr} style={styles.img}/></Link>
    </div>

  )

  }
}

export default Footer;
