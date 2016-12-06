import React, { PropTypes } from 'react'
import Footer from '../../component/footer'
import  Recommendwen  from '../../Recommend/recommendwen'
import Img7 from '../../images/littlepic/338.png'

class ClaMo extends React.Component {
  render () {
  return(
    <div className="claH">
      <div className="kong">

      </div>
      <div className="clswen">
        <Recommendwen/>
        </div>
        <Footer />
    </div>

  )
  }
}
ClaMo.contextTypes = {
  router:React.PropTypes.object
}
export default ClaMo;
