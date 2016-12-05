import React, { PropTypes } from 'react'
import Header from '../component/header'
import Zengfan from './Zengfan';
class Recommend extends React.Component {
  render () {
    let  styles={
      p:{
       width:'20vw',
       height:'3vh',
       borderRadius:'15px 0 0 15px',
       backgroundColor:'#E53935',
       lineHight:'30px',
       textAlign:'center',
       float:'right',
       marginTop:'2vh',
       color:'#fff'
     },
     p2:{
       width:'55vw',
       height:'10vh',
       fontSize:'20px',
       color:'#fff',
       paddingTop:'6vh',
       paddingLeft:'5vw'
     },
     p3:{
       width:'70vw',
       height:'10vh',
       fontSize:'18px',
       color:'#fff',
       paddingLeft:'5vw',
     }
   }
  return(
    <div>
      <Header />
      <div className="recdfirst1">
        <p style={styles.p}>剩余80天</p>
        <p style={styles.p2}>对话列奥纳多达芬奇</p>
        <p style={styles.p3}>/第四届艺术与科学国际作品展</p>
      </div>
      <div className="recdfirst2">
        <p style={styles.p}>剩余90天</p>
        <p>散步－－曾梵志个人展</p>

      </div>
      <div className="recdfirst3">
        <p style={styles.p}>剩余119天</p>
        <p>梵高和高更：理想与现实</p>


      </div>
      <Zengfan />
    </div>
  )
  }
}

export default Recommend;
