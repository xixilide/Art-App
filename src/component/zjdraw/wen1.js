import React, { PropTypes } from 'react'
import zhuanf from '../../images/littlepic/24.png'
import liulan from '../../images/littlepic/25.png'
import plun from '../../images/littlepic/26.png'
import plunh from '../../images/littlepic/20.png'
import heart from '../../images/littlepic/21.png'
import hearth from '../../images/littlepic/22.png'
import zhuanfh from '../../images/littlepic/23.png'

class Wen1 extends React.Component {
  render () {
   return(

       <div className="recdsecond1">
          <p className="recp">照片为诗｜巴西摄影师 Nadia Maria</p>
          <p className="rect"></p>
          <div className="recdbom">
            <a><img src={zhuanf} className="recdzf" /></a>
            <ul className="recdul">
              <li><a><img src={heart} className="recdul1"/>159</a></li>
              <li><a><img src={liulan} className="recdul1"/>344</a></li>
              <li><a><img src={plun} className="recdul1"/>56</a></li>
            </ul>
          </div>
        </div>
   )
  }
}

export default Wen1;
