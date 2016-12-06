import React, { PropTypes } from 'react'
import zhuanf from '../../images/littlepic/24.png'
import liulan from '../../images/littlepic/25.png'
import plun from '../../images/littlepic/26.png'
import plunh from '../../images/littlepic/20.png'
import heart from '../../images/littlepic/21.png'
import hearth from '../../images/littlepic/22.png'
import zhuanfh from '../../images/littlepic/23.png'

class File2 extends React.Component {
  render () {

   return(
     <div className="recdfirst2">
        <p className="recp">剩余90天</p>
        <p className="rect">散步－－曾梵志个人展</p>
        <p className="recd"></p>
        <h6 className="recTime">展览时间：2016.09.19-11.19</h6>
        <h6 className="recL">展览地点：尤伦斯艺术中心</h6>
        <div className="recdbom">
          <a><img src={zhuanf} className="recdzf" /></a>
          <ul className="recdul">
            <li><a><img src={heart} className="recdul1"/>151</a></li>
            <li><a><img src={liulan} className="recdul1"/>1.1k</a></li>
            <li><a><img src={plun} className="recdul1"/>12</a></li>
          </ul>
        </div>
   </div>
   )
  }
}

export default File2;
