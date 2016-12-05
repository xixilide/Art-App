import React, { PropTypes } from 'react'
import Header from '../component/header'
import File1 from '../component/zjdraw/file1'
import File2 from '../component/zjdraw/file2'
import File3 from '../component/zjdraw/file3'
class Recommend extends React.Component {
  render () {
  return(
    <div>
      <Header />
      <File1 />
      <File2 />
      <File3 />
    </div>
)
}
}
export default Recommend;
