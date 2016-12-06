import React, { PropTypes } from 'react'
import Header from '../component/header'

import File1 from '../component/zjdraw/file1'
import File2 from '../component/zjdraw/file2'
import File3 from '../component/zjdraw/file3'
import Img from '../images/littlepic/u1.jpg'
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
      <File1 />
      <File2 />
      <File3 />
      </div>

    </div>
)
}
}
export default Recommend;
