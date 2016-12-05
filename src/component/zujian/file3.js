import React, { PropTypes } from 'react'
import zhuanf from '../../images/littlepic/17.png'
import liulan from '../../images/littlepic/18.png'
import plun from '../../images/littlepic/19.png'
import plunh from '../../images/littlepic/20.png'
import heart from '../../images/littlepic/21.png'
import hearth from '../../images/littlepic/22.png'
import zhuanfh from '../../images/littlepic/23.png'
class File3 extends React.Component {
  render () {
   return(
       <div className="recdfirst rec3">
          <p className="recp">剩余80天</p>
          <p className="rect">梵高和高更：理想与现实</p>
          <h6 className="recTime">展览时间：2016.10.08-12.18</h6>
          <h6 className="recL">展览地点：东京都艺术馆</h6>
          <div className="recdbom">
            <a><img src={zhuanf} className="recdzf"/></a>
          </div>
        </div>
   )
  }
}

export default File3;
