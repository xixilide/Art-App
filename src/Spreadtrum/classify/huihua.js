import React, { PropTypes } from 'react'
import Recommendzhan from '../../component/footer'
import Footer from '../../Recommend/recommendzhan'
import Img7 from '../../images/littlepic/338.png'
import Img1 from '../../images/littlepic/339.png';
import Img2 from '../../images/littlepic/16.png';

class ClaDraw extends React.Component {
  handleClick(){
    this.context.router.goBack()
  }
  render () {
  return(
    <div className="claH">
      <div className="kong">
        <div className='release-top'>
          <img src={Img2} style={{left:'5vw',hight:'2vh'}}/>
          <img src={Img1} style={{right:'5vw'}} onClick={this.handleClick.bind(this)}/>
        </div>

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
