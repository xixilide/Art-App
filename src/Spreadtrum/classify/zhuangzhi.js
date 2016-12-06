import React, { PropTypes } from 'react';
import footer from '../../component/footer';
import Img1 from '../../images/littlepic/339.png';
import Img2 from '../../images/littlepic/16.png';
import Img3 from '../../images/littlepic/sorry.png';



class  zhuangzhi extends React.Component {
  handleClick(){
    this.context.router.goBack()
  }
  render () {
    return(
      <div className="bgbig">
      <div className='search'>
      <img src={Img2} style={{left:'5vw'}}/>
      <img src={Img1} style={{right:'5vw'}} onClick={this.handleClick.bind(this)}/>

      </div>
        <div className="bga">
            <div className="bgsmail">
                <div className="compoent">
                <img src={Img3}/>
                  <p>抱歉，近期没有相关展览信息</p>
                </div>
              </div>
        </div>
        <footer />
      </div>
    )
  }
}
zhuangzhi.contextTypes = {
  router:React.PropTypes.object
}
export default zhuangzhi ;
