import React, { PropTypes } from 'react'
import Header from '../component/header'

import File1 from '../component/zjdraw/file1'
import File2 from '../component/zjdraw/file2'
import File3 from '../component/zjdraw/file3'
import Img from '../images/littlepic/r1.jpg'
class Recommendzhan extends React.Component {
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
        <File1 />
        <File2 />
        <File3 />
      </div>
    </div>
)
}
}
export default Recommendzhan;
