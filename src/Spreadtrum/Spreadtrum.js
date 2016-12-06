import React, { PropTypes } from 'react'
import Pichover from './pichover'
import Picshow from './picshow'
import NowShow from './nowShow'
import SoonShow from './soonShow'
import Header from '../component/header'
class Spreadtrum extends React.Component {
  constructor(){
   super();
   this.state={
     show:0
   }
 }
   handleTab(){
    this.state.show=!this.state.show
   }

  render () {
    return(
      <div>
        <Header />
        <Picshow />
        <Pichover />
        <div onTouchMove={this.handleTab.bind(this)} >
          {this.state.show==0 ?   <NowShow/> :<SoonShow />}
        </div>


      </div>
    )

  }
}

export default Spreadtrum;
