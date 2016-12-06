import React, { PropTypes } from 'react'
import Header from '../component/header'
import { Link} from 'react-router';

import Wen1 from '../component/zjdraw/wen1'
import Wen2 from '../component/zjdraw/wen2'
import Wen3 from '../component/zjdraw/wen3'
import Wen4 from '../component/zjdraw/wen4'
import Wen5 from '../component/zjdraw/wen5'
import Img from '../images/littlepic/r2.jpg'
class Recommendwen extends React.Component {
  render () {
    let styles={
      bar:{
        width:'100%',
        height:'8vh'
      }
    }
  return(
      <div >
        <Link to="/baxi"><Wen1 /></Link>
        <Link to="/shanze"><Wen2 /></Link>
        <Wen3 />
        <Wen4 />
        <Wen5 />
      </div>
)
}
}
export default Recommendwen;
