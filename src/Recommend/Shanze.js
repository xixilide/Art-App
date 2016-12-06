import React, { PropTypes } from 'react';
import Img1 from '../images/recommend/shanze/1.png'
import Img2 from '../images/recommend/shanze/2.png'
import Img3 from '../images/recommend/shanze/3.png'
import Img4 from '../images/recommend/shanze/4.png'
import Img5 from '../images/recommend/shanze/5.png'
import Img6 from '../images/recommend/shanze/6.png'
import Img7 from '../images/littlepic/338.png'

import CommentFooter from '../component/CommentFooter';

class Shanze extends React.Component {
  render () {
  return(
      <div className='zengfan-wrap baxi-wrap'>
      <img src={Img7} style={{position:'absolute',top:'10px',left:'10px',width:'10vw',height:'10vw'}}
              onClick={this.context.router.goBack.bind(this)}  />
      <img src={Img1} />
      <p><span style={{fontSize:'4vw'}}>杉泽【中国百鬼】</span>子不语怪力乱神。国人画之。</p>
      <img src={Img2} />
      <p>【中国百鬼：山鬼夔】····九歌·山鬼：“杳冥冥兮羌昼晦，东风飘兮神灵雨。留灵修兮澹忘归，岁既晏兮孰华予</p>
      <img src={Img3} />
      <p>狐骑·乘黄。《山海经·海外西经》：“白民之国在龙鱼北,白首被发。有乘黄，其状如狐，其背上有角，乘之寿二千岁。</p>
      <img src={Img4} />
      <p>【中国百鬼】逐愿·讹兽。《神异经》：“西南荒中出讹兽，其状若菟，人面能言，常欺人，言东而西，言恶而善。
        其肉美，食之，言不真矣。</p>
      <img src={Img5} />
      <p>【中国百鬼】逐愿·讹兽。《神异经》：“西南荒中出讹兽，其状若菟，人面能言，常欺人，言东而西，
        言恶而善。其肉美，食之，言不真矣。</p>
      <img src={Img6} />
      <p>【中国百鬼】金华之猫。《坚瓠集》：“每于中宵，蹲踞屋上，伸口对月，吸其精华，久而成怪···”</p>
      <CommentFooter />
      </div>
  )
  }
}
Shanze.contextTypes = {
  router:React.PropTypes.object
}
export default Shanze;
