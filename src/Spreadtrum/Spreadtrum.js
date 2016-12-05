import React, { PropTypes } from 'react'
import Pichover from './pichover'
import Picshow from './picshow'
import Header from '../component/header'
class Spreadtrum extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <Picshow />
        <Pichover />
      </div>
    )

  }
}

export default Spreadtrum;
