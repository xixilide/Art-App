import React, { PropTypes } from 'react'
import Header from '../component/header'
import Wen1 from '../component/zjdraw/wen1'
import Wen2 from '../component/zjdraw/wen2'
import Wen3 from '../component/zjdraw/wen3'
import Img from '../images/littlepic/r2.jpg'
class Recommend extends React.Component {
  render () {
    let styles={
      bar:{
        width:'100%',
        height:'8vh'
      }
    }
  return(
    <div className="recommend">
      <Header />
      <div className="recommendall">
      <div className="recommendbar"><img src={Img} style={styles.bar}/></div>
      <Wen1 />
      <Wen2 />
      <Wen3 />
      </div>
    </div>
)
}
}
export default Recommend;
