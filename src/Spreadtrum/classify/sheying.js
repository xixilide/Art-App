import React, { PropTypes } from 'react'
import Footer from '../../component/footer'
import  Recommendwen  from '../../Recommend/recommendwen'
import Img7 from '../../images/littlepic/338.png'
import Img1 from '../../images/littlepic/339.png';
import Img2 from '../../images/littlepic/16.png';

class Sheying extends React.Component {
  handleClick(){
    this.context.router.goBack()
  }
  render () {
  return(
    <div className="claH">
      <div className="k1">
        <div className='release-top'>
          <img src={Img2} style={{left:'5vw',hight:'2vh',width:''}}/>
          <img src={Img1} style={{right:'5vw'}} onClick={this.handleClick.bind(this)}/>
        </div>
        
      </div>
      <div className="clswen">
        <Recommendwen/>
        </div>
        <Footer />
    </div>

  )
  }
}
Sheying.contextTypes = {
  router:React.PropTypes.object
}
export default Sheying;
