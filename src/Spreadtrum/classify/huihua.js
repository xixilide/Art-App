import React, { PropTypes } from 'react'
import Recommendzhan from '../../component/footer'
import Footer from '../../Recommend/recommendzhan'
import Img7 from '../../images/littlepic/338.png'

class ClaDraw extends React.Component {
  
  render () {
  return(
    <div className="claH">
      <div className="kong">
          <img src={Img7} style={{position:'absolute',top:'10px',left:'10px',width:'10vw',height:'10vw'}}
            onClick={this.context.router.goBack.bind(this)}/>
      </div>
      <div className="clswen">
        <Recommendzhan />
        </div>
        <Footer />
    </div>

  )
  }
}

export default ClaDraw;
