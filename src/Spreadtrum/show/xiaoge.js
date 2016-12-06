import React, { PropTypes } from 'react'
import Img1 from '../../images/home/xiaoge/1.gif'
import Img2 from '../../images/home/xiaoge/2.gif'
import Img3 from '../../images/home/xiaoge/3.gif'
import Img4 from '../../images/home/xiaoge/4.gif'
import Img5 from '../../images/home/xiaoge/5.gif'
import CommentFooter from '../../component/CommentFooter.js'
class Xiaoge extends React.Component {
  handleBack(){
  this.context.router.goBack();
}
  render () {
    let styles={
      btn:{
        display:'block',
        position:'fixed',
        top:'20px',
        zIndex:30,
        color:'#fff',
        left:'20px',
        backgroundColor: "rgba(0, 0, 0, 0)",
        border:'none',
      },
      p1:{
          backgroundColor:'#FF3030',
          textAlign:' center',
          borderRadius:' 20px',
          width: '20vw',
          marginLeft: '-8px',
          position:'absolute'

      }

    }
    return(
      <div style={{width:'100vw',position:'relative'}}>
        <button className='cjy-button' type="button" onClick={this.handleBack.bind(this)}
           style={styles.btn}>
        <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
        </button>
         <div>
           <img src={Img1} style={{width:'100vw'}}/>
         </div>
         <div>
           <p className='xiaoge-p1'>展示内容</p>
             <p className='xiaoge-p3'>本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。</p>
             <p className='xiaoge-p3'>一个是物质精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，
             会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的?25 开始的“心动”展，
             无疑极大的撩起了人们的好奇心。</p>

         </div>

         <div style={{position:'relative'}}>
           <p  style={styles.p1}>作者介绍</p>
           <img src={Img2} style={{width:'100vw'}}/>
         </div>
         <div>
           <p className='xiaoge-p3'>肖全，男,1959 年出生于四川成都，曾任深证《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。
           1980 年代中期开始“我们这一代”拍摄，1991 年出版《天堂之鸟》三毛摄影专辑，1992 年在瑞士举办个展，
           1993 年在法国参加拍摄影联展，1997 年出版《我们这一代》。2000 年出版《我镜头下的美丽女人》。</p>
         </div>
         <div>
           <p style={styles.p1} >作品展示</p>
           <img src={Img3} style={{width:'100vw'}}/>
         </div>
         <div>
           <img className='xiaoge-img' src={Img4} style={{width:'100vw'}}/>
         </div>
         <div>
           <img className='xiaoge-img' src={Img5} style={{width:'100vw'}}/>
         </div>
         <CommentFooter />
      </div>
    )

  }
}
Xiaoge.contextTypes = {
  router: React.PropTypes.object
};
export default Xiaoge;
