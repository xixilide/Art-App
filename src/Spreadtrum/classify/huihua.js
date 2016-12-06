import React, { PropTypes } from 'react'
import Recommendzhan from '../../component/footer'
import Footer from '../../Recommend/recommendzhan'
import Img7 from '../../images/littlepic/338.png'

class ClaDraw extends React.Component {

  render () {
  return(
    <div className="claH">
      <div className="kong">
      </div>
      <div className="clswen">
        <Recommendzhan />
        </div>
        <Footer />
    </div>

  )
  }
}
ClaDraw.contextTypes = {
  router:React.PropTypes.object
}
export default ClaDraw;
