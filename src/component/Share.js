import React, { PropTypes } from 'react'

import Img1 from '../images/littlepic/17.png';
import Img2 from '../images/littlepic/18.png';
import Img3 from '../images/littlepic/19.png';
import Img4 from '../images/littlepic/19.png';

class Share extends React.Component {
  handleClick3(){
    this.props.handleClick3()
  }
  render () {
    return(
      <div className='share-wrap'>
        <p style={{color:'#333',textAlign:'center',fontSize:'16px'}}>分享到</p>
        <div className='share-index'>
          <div><img src={Img3} /><br /><span>艺集</span></div>
          <div><img src={Img3} /><br /><span style={{textAlign:'center'}}>微信</span></div>
          <div><img src={Img2} /><br /><span>微博</span></div>
          <div><img src={Img1} /><br /><span>QQ</span></div>
        </div>
        <p style={{fontSize:'18px',textAlign:'center'}} onClick={this.handleClick3.bind(this)}>取消</p>
      </div>
    )
  }
}

export default Share;
