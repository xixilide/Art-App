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
     show:0,
     chose:true
   }
 }
 handleTab(i){
    this.setState({
      show:i,
      chose:!this.state.chose
    })
  }


  render () {
    let styles = {
      btn1:{
        width:'50vw',
        height:'6vh',
        float:'left',
        textAlign: 'center',
        lineHeight:'6vh',
        fontSize:'1.4em',
        color:'#212121',
        backgroundColor: this.state.chose? '#d25c52' : '#c9c9c9'
      },
      btn2:{
          width:'50vw',
          height:'6vh',
          float:'left',
          textAlign: 'center',
          lineHeight:'6vh',
          fontSize:'1.4em',
          color:'#212121',
          backgroundColor: this.state.chose? '#c9c9c9' : '#d25c52'
        }
    }
    return(
      <div>
        <Header />
        <div className="recommendall">
        <Picshow />
        <Pichover />
        <div>
           <div onTouchEnd={this.handleTab.bind(this,0)} style={styles.btn1} className="sbtn1" >
          正在展出
        </div>
          <div onTouchEnd={this.handleTab.bind(this,1)} style={styles.btn2} className="sbtn2" >
          即将展出
        </div>
        </div>

        <div>
            {this.state.show==0 ?   <NowShow/> :<SoonShow />}
        </div>

        </div>
      </div>
    )

  }
}

export default Spreadtrum;
