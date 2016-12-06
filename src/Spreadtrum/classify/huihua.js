import React, { PropTypes } from 'react'
import Recommendzhan from '../../component/footer'
import Footer from '../../Recommend/recommendzhan'
class ClaDraw extends React.Component {
  render () {
  return(
    <div className="claH">
      <div className="kong"></div>
      <div className="clswen">
        <Recommendzhan />
        </div>
        <Footer />
    </div>

  )
  }
}

export default ClaDraw;
