import React, { PropTypes } from 'react'
import Header from '../component/header'
<<<<<<< HEAD

=======
import zhuanf from '../images/littlepic/17.png'
import liulan from '../images/littlepic/18.png'
import plun from '../images/littlepic/19.png'
import plunh from '../images/littlepic/20.png'
import heart from '../images/littlepic/21.png'
import hearth from '../images/littlepic/22.png'
import zhuanfh from '../images/littlepic/23.png'

>>>>>>> c74114daacc41e7fb1198a3a61ae49976e7de9be
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

       width:'60vw',
       height:'8vh',
       fontSize:'20px',
       color:'#fff',
       paddingTop:'4vh',

       paddingLeft:'5vw'
     },
     p3:{
       width:'70vw',

       height:'５vh',
       fontSize:'18px',
       color:'#fff',
       paddingLeft:'5vw',
     },
     p4:{
       width:'70vw',
       height:'10vh',
       fontSize:'18px',
       color:'#fff',
       paddingLeft:'5vw',
       paddingTop:'4vh'
     },
     h6:{
       color:'#fff',
       marginTop:'8vh',
       paddingLeft:'5vw'
     },
     h7:{
       color:'#fff',
       paddingLeft:'5vw'
     },
     h8:{
       color:'#fff',
       marginTop:'4vh',
       paddingLeft:'5vw'
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

        <h6 style={styles.h8}>展览时间：2016.09.10-11.09</h6>
        <h6 style={styles.h7}>展览地点：清华大学艺术博物馆</h6>
        <div className="recdbom">
          <a><img src={zhuanf} className="recdzf"/></a>
        </div>
      </div>
      <div className="recdfirst2">
        <p style={styles.p}>剩余90天</p>
        <p style={styles.p2}>散步－－曾梵志个人展</p>
        <h6 style={styles.h6}>展览时间：2016.09.19-11.19</h6>
        <h6 style={styles.h7}>展览地点：尤伦斯艺术中心</h6>
        <div className="recdbom">
          <a><img src={zhuanf} className="recdzf"/></a>
          <ul className="recdul">
            <li><a><img src={heart} className="recdul1"/></a></li>
            <li><a><img src={liulan} className="recdul1"/></a></li>
            <li><a><img src={plun} className="recdul1"/></a></li>
          </ul>
        </div>
      </div>
      <div className="recdfirst3">
        <p style={styles.p}>剩余119天</p>
        <p style={styles.p4}>梵高和高更：理想与现实</p>
        <h6 style={styles.h6}>展览时间：2016.10.08-12.18</h6>
        <h6 style={styles.h7}>展览地点：东京都艺术馆</h6>
        <div className="recdbom">
          <a><img src={zhuanf} className="recdzf"/></a>
        </div>
      </div>

    </div>
  )
  }
}

export default Recommend;
