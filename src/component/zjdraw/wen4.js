import React, { PropTypes } from 'react'
import zhuanf from '../../images/littlepic/24.png'
import liulan from '../../images/littlepic/25.png'
import plun from '../../images/littlepic/26.png'
import plunh from '../../images/littlepic/20.png'
import heart from '../../images/littlepic/21.png'
import hearth from '../../images/littlepic/22.png'
import zhuanfh from '../../images/littlepic/23.png'

class Wen4 extends React.Component {
  render () {
   return(
       <div className="recdsecond4">
          <p className="rect">格子｜barbara dziadosz</p>
          <div className="recdbom">
            <a><img src={zhuanf} className="recdzf" /></a>
            <ul className="recdul">
              <li><a><img src={heart} className="recdul1"/>821</a></li>
              <li><a><img src={liulan} className="recdul1"/>153</a></li>
              <li><a><img src={plun} className="recdul1"/>56</a></li>
            </ul>
          </div>
        </div>
   )
  }
}

export default Wen4;
