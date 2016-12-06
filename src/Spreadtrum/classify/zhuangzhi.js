import React, { PropTypes } from 'react';
import footer from '../../component/footer';



class  zhuangzhi extends React.Component {
  render () {
    return(
      <div className="bgbig">
      <div className='search'>

      </div>
        <div className="bga">
            <div className="bgsmail">
                <div className="compoent">
                  <p>抱歉，近期没有相关展览信息</p>
                  <p></p>
                </div>
              </div>
        </div>
        <footer />
      </div>
    )
  }
}

export default zhuangzhi ;
