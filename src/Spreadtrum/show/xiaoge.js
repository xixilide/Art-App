import React, { PropTypes } from 'react'
import Img1 from '../../images/home/xiaoge/1.gif'
import Img2 from '../../images/home/xiaoge/2.gif'
import Img3 from '../../images/home/xiaoge/3.gif'
import Img4 from '../../images/home/xiaoge/4.gif'
import Img5 from '../../images/home/xiaoge/5.gif'
class Xiaoge extends React.Component {
  render () {
    return(
      <div>
         <div>
           <img src={Img1} />
         </div>
         <div>
           <h3 className='xiaoge-h3'>展示内容</h3>
             <p>本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。</p>
             <p>一个是物质精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，
             会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的?25 开始的“心动”展，
             无疑极大的撩起了人们的好奇心。</p>

         </div>
         <div>
           <img src={Img2} />
         </div>
         <div>
           <p>肖全，男,1959 年出生于四川成都，曾任深证《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。
           1980 年代中期开始“我们这一代”拍摄，1991 年出版《天堂之鸟》三毛摄影专辑，1992 年在瑞士举办个展，
           1993 年在法国参加拍摄影联展，1997 年出版《我们这一代》。2000 年出版《我镜头下的美丽女人》。</p>
         </div>
         <div>
           <img src={Img3} />
         </div>
         <div>
           <img src={Img4} />
         </div>
         <div>
           <img src={Img5} />
         </div>
         <div>
           <h3 className='xiaoge-h3'>展览评论</h3>
         </div>


      </div>
    )

  }
}

export default Xiaoge;
