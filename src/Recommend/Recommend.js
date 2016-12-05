import React, { PropTypes } from 'react'
import Header from '../component/header'

class Recommend extends React.Component {
  render () {
  
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
    </div>
  )
  }
}

export default Recommend;
