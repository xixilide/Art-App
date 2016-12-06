import React, { PropTypes } from 'react'
import Footer from '../../component/footer'
import  Recommendwen  from '../../Recommend/recommendwen'
import Img7 from '../../images/littlepic/338.png'
import Img3 from '../../images/home/first/now/3.jpg'
import Img4 from '../../images/home/first/now/4.jpg'
import Img5 from '../../images/home/first/now/5.jpg'
import Img1 from '../../images/littlepic/339.png';
import Img2 from '../../images/littlepic/16.png';

class ClaMo extends React.Component {
  handleClick(){
    this.context.router.goBack()
  }
  render () {
    let styles={
      pic:{
        width:'100%',
        height:'28vh'
      }
    }
  return(
    <div className="claH">
      <div className="k2">
        <div className='release-top'>
          <img src={Img2} style={{left:'5vw',hight:'2vh',width:''}}/>
          <img src={Img1} style={{right:'5vw'}} onClick={this.handleClick.bind(this)}/>
        </div>
        
      </div>
      <div className="clswen">
        <div className="now_pic"> <img src={Img3} style={styles.pic}/></div>
        <div className="now_pic"><img src={Img4} style={styles.pic}/></div>
        <div className="now_pic"> <img src={Img5} style={styles.pic}/></div>
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
