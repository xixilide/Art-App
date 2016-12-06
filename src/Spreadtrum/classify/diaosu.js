import React, { PropTypes } from 'react';
import Img1 from '../../images/home/diaosu/1.gif';
import Img2 from '../../images/home/diaosu/2.gif';
import Img3 from '../../images/home/diaosu/3.gif';
import Img4 from '../../images/home/diaosu/4.gif';

import Img5 from '../../images/littlepic/339.png';
import Img6 from '../../images/littlepic/16.png';

class Diaosu extends React.Component {
  handleClick(){
    this.context.router.goBack()
  }
  render () {
    return(
      <div>
        <div className="k5">
          <div className='release-top'>
            <img src={Img6} style={{left:'5vw',hight:'2vh'}}/>
            <img src={Img5} style={{right:'5vw'}} onClick={this.handleClick.bind(this)}/>
          </div>

        </div>
        <div>

        </div>
        <div>
          <img src={Img2} style={{width:'100vw'}}/>
        </div>
        <div style={{marginTop:'2vh'}}>
          <img src={Img3} style={{width:'100vw'}}/>
        </div>
        <div>
          <img src={Img4} style={{width:'100vw'}}/>
        </div>

      </div>
    )
  }
}
Diaosu.contextTypes = {
  router:React.PropTypes.object
}

export default Diaosu;
