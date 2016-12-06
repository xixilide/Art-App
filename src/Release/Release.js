import React, { PropTypes } from 'react'
import Img1 from '../images/littlepic/333.png';
import Img2 from '../images/littlepic/334.png';
import Img3 from '../images/littlepic/335.png';
import Img4 from '../images/littlepic/336.png';
import Img5 from '../images/littlepic/337.png';
import Design from '../Spreadtrum/classify/Design'
class Release extends React.Component {
  render () {
  return(
    <div className='release-wrap'>
      <div className='release-wrap1'>
        <div className='release-top'>
          <span>上传照片</span>
          <img src={Img1} />
        </div>
        <textarea name='aaa' defaultValue='说点什么。。。'/>


       <div className='release-photo'>
         <img src={Img2} />
         <p>点击添加照片</p>
       </div>
       <img src={Img3} style={{width:'9vw',height:'8vw',marginTop:'5px'}}/>
       <div className='release-bot'>
         <img src={Img4}/><span>点击获取地址</span>
         <img src={Img5}/><span>添加标签</span>

       </div>
      </div>
    </div>
  )
  }
}

export default Release;
