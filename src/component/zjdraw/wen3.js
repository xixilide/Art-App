import React, { PropTypes } from 'react'
import zhuanf from '../../images/littlepic/24.png'
import liulan from '../../images/littlepic/25.png'
import plun from '../../images/littlepic/26.png'
import plunh from '../../images/littlepic/20.png'
import heart from '../../images/littlepic/21.png'
import hearth from '../../images/littlepic/22.png'
import zhuanfh from '../../images/littlepic/23.png'

class Wen3 extends React.Component {
  render () {
   return(
       <div className="recdsecond3">
          <p className="rect">Seth Taras　摄影合成作品</p>
          <p className="recd">[Then & Now Composites]</p>
          <div className="recdbom">
            <a><img src={zhuanf} className="recdzf" /></a>
            <ul className="recdul">
              <li><a><img src={heart} className="recdul1"/>821</a></li>
              <li><a><img src={liulan} className="recdul1"/>123</a></li>
              <li><a><img src={plun} className="recdul1"/>56</a></li>
            </ul>
          </div>
        </div>
   )
  }
}

export default Wen3;
