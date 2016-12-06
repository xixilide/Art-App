import React, { PropTypes } from 'react'
import {Link} from 'react-router';
import $ from 'jquery';
import img1 from '../images/login/weibo.png';
import img2 from '../images/login/weixin.png';
class Login extends React.Component {
  constructor(){
    super();
    this.state={
      data:'/denglu',
      wait:true,
      radio:true
    }
  }
  handleChange(){
    var userName = $("#uName").val();
    var userPass = $("#uPass").val();
    if(userName=='' || userPass==''){
      this.setState({
          data:'/denglu'
        })
    }else{
      this.setState({
          data:'/login'
        })
    }


  }
  handleClick(){
    this.setState({
      radio:!this.state.radio
    })
  }
  handleLogin(){
    var userName = $("#uName").val();
    var userPass = $("#uPass").val();
  	if (userName == "") {
  		alert("用户名不能为空");
  		return false;
  	} else if (userPass == "") {
  		alert("密码不能为空");
  		return false;
  	} else {
  		return true;
  	}
  }
  render () {
  return(
      <div className='login-wrap'>
        <form className='login-form' onChange={this.handleChange.bind(this)}>
          <input id='uName' type='text' placeholder='点击输入手机号/Email登录'></input><br/>
          <input id='uPass' type='text' placeholder='输入密码'></input>
          <Link to={this.state.data} onClick={this.handleLogin.bind(this)}>登录</Link>
          <Link to='zhuce'>注册</Link>
          <div className='login-radio'>
            <input type="checkbox" checked={this.state.radio} onChange={this.handleClick.bind(this)} name="Sex" /><span> 登录或注册即同意艺集<a className='a'>用户服务协议</a></span>
          </div>
        </form>
        <div className='login-ww'>
          <p><a><img src={img1}></img>微博</a></p>
          <p><a><img src={img2}></img>微信</a></p>
        </div>
      </div>
  )
  }
}

export default Login;
