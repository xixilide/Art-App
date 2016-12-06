import React, { PropTypes } from 'react'
import Header from '../component/header'
import Wen1 from '../component/zjdraw/wen1'
import Wen2 from '../component/zjdraw/wen2'
import Wen3 from '../component/zjdraw/wen3'
import Img from '../images/littlepic/r2.jpg'
class Recommendwen extends React.Component {
  render () {
    let styles={
      bar:{
        width:'100%',
        height:'8vh'
      }
    }
  return(
    <div className="recommend">
      <div className="recommendall">
      <Wen1 />
      <Wen2 />
      <Wen3 />
      </div>
    </div>
)
}
}
export default Recommendwen;
