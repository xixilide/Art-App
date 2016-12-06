import React, { PropTypes } from 'react'
import Footer from '../../component/footer'
import  Recommendwen  from '../../Recommend/recommendwen'
import Img7 from '../../images/littlepic/338.png'

class ClaMo extends React.Component {
  render () {
  return(
    <div className="claH">
      <div className="kong">
        <img src={Img7} style={{position:'absolute',top:'10px',left:'10px',width:'10vw',height:'10vw'}}
          onClick={this.context.router.goBack.bind(this)}/>
      </div>
      <div className="clswen">
        <Recommendwen/>
        </div>
        <Footer />
    </div>

  )
  }
}

export default ClaMo;
