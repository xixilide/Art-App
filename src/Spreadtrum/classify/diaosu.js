import React, { PropTypes } from 'react';
import Img1 from '../../images/home/diaosu/1.gif';
import Img2 from '../../images/home/diaosu/2.gif';
import Img3 from '../../images/home/diaosu/3.gif';
import Img4 from '../../images/home/diaosu/4.gif';


class Diaosu extends React.Component {
  render () {
    return(
      <div>
        <div>

        </div>
        <div>
          <img src={Img1} style={{width:'100vw'}}/>
        </div>
        <div>
          <img src={Img2} style={{width:'100vw',marginTop:'-130px'}}/>
        </div>
        <div>
          <img src={Img3} style={{width:'100vw'}}/>
        </div>
        <div>
          <img src={Img4} style={{width:'100vw'}}/>
        </div>
        
      </div>
    )
  }
}

export default Diaosu;
