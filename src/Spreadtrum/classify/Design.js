import React, { PropTypes } from 'react'
import Img from '../../images/home/first/top/1.jpg';
import Img1 from '../../images/littlepic/339.png';
import Img2 from '../../images/littlepic/16.png';

class Design extends React.Component {
  handleClick(){
    this.context.router.goBack()
  }
  render () {
  return(
    <div className='design-wrap'>
      <div style={{background:'rgba(225,225,225,0.7)'}}>
      <div className='release-top'>
        <img src={Img2} style={{left:'5vw'}}/>
        <img src={Img1} style={{right:'5vw'}} onClick={this.handleClick.bind(this)}/>

      </div>
        <div>
            <img src={Img} style={{width:'100%'}}/>
        </div>
      </div>
    </div>

  )
  }
}
Design.contextTypes = {
  router:React.PropTypes.object
}
export default Design;
