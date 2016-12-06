import React, { PropTypes } from 'react'

class Zhuce extends React.Component {
  constructor(){
    super();
    this.state={
      petName:"",
      pass:"",
      email: "",
      intro: "",
      male: true, //性别
      petNameError:"",
      passError:"",
      emailError: "",
      introError: ""
    }
  }
  handlePetName(e) {
      var value = e.target.value;
      var error = '';
      if(!(/^[0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$/.test(value))) {
        error = '请以汉字、数字、字母（大小写）、下划线开头的3-16位';
      }
      this.setState({
        petName: value,
        petNameError: error
      });
    }
    handlePass(e) {
        var value = e.target.value;
        var error = '';
        if(!(/^(\w){6,20}$/.test(value))) {
          error = '请输入6-20个字母、数字、下划线  ';
        }
        this.setState({
          pass: value,
          passError: error
        });
      }
  handleEmail(e) {
      var value = e.target.value;
      var error = '';
      if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
        error = '请输入正确的Email';
      }
      this.setState({
        email: value,
        emailError: error
      });
    }
  handleGender(e) {
    var male = !!(e.target.value == 'MALE');
    this.setState({
      male: male
    });
  }
  handleSubmit(){

  }
  render () {

    return(
      <div className='zhuce'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p>
            <label htmlFor='petname'>昵称: </label>
            <input type='text' name='intro'  value={this.state.petName} onChange={this.handlePetName.bind(this)} />
            <span>{this.state.petNameError}</span>
          </p>
          <p>
            <label htmlFor='pass'>密码: </label>
            <input type='text' name='intro'  value={this.state.pass} onChange={this.handlePass.bind(this)} />
            <span>{this.state.passError}</span>
          </p>
          <p>
            <label htmlFor='email'>email:</label>
            <input type='text' name='intro'  value={this.state.email} onChange={this.handleEmail.bind(this)} />
            <span>{this.state.emailError}</span>
          </p>
          <p>
            <label>性别:</label>
            <input type='radio' name='gender' checked={this.state.male} onChange={this.handleGender.bind(this)} value='MALE' />男
            <input type='radio' name='gender' checked={!this.state.male} onChange={this.handleGender.bind(this)} value='FEMALE' />女
          </p>
          <button>立即注册</button>
        </form>
      </div>
    )
  }
}

export default Zhuce;
