import React, { PropTypes } from 'react'
import Header from '../component/header'

import File1 from '../component/zjdraw/file1'
import File2 from '../component/zjdraw/file2'
import File3 from '../component/zjdraw/file3'


import Recommendwen from './recommendwen.js'
import Recommendzhan from './recommendzhan.js'

class Recommend extends React.Component {
  constructor(){
   super();
   this.state={
     show:1,
     chose:true
   }
 }
 handleTab(i){
   console.log(i);
    this.setState({
      show:i,
      chose:!this.state.chose
    })
    console.log(this.state.chose);
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
        },
        bar:{
          width:'100%',
          height:'8vh'
        }
    }

  return(
    <div>
      <Header />
      <div className="recommendall">
        <div className="recommendbarr">
           <div onTouchEnd={this.handleTab.bind(this,1)} style={styles.btn1} className="sbtn1" >
          展</div>
          <div onTouchEnd={this.handleTab.bind(this,0)} style={styles.btn2} className="sbtn2" >
          文
        </div>
      </div>
      <div>
          {this.state.show==0 ?   <Recommendwen/> :<Recommendzhan />}
      </div>

    </div>
</div>
)
}
}

export default Recommend;
