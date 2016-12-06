import React, { PropTypes } from 'react';
import Img1 from '../images/recommend/zengfan/1.jpg';
import Img2 from '../images/recommend/zengfan/2.jpg';
import Img3 from '../images/recommend/zengfan/3.jpg';
import Img4 from '../images/recommend/zengfan/4.jpg';
import Img5 from '../images/recommend/zengfan/5.jpg';
import Img6 from '../images/recommend/zengfan/6.jpg';
import Img7 from '../images/littlepic/338.png'


import CommentFooter from '../component/CommentFooter';
class Zengfan extends React.Component {
  render () {
    let styles={
      marginBottom:'20px'
    };
  return(
    <div className='zengfan-wrap'>
      <img src={Img7} style={{position:'absolute',top:'10px',left:'10px',width:'10vw',height:'10vw'}}
        onClick={this.context.router.goBack.bind(this)}/>
      <span style={{position:'absolute',top:'10px',left:'14px',color:'#fff',fontSize:'5vw',marginTop:'7vh'}}>散步——曾梵志个展</span>
      <span style={{position:'absolute',top:'10px',left:'14px',color:'#ccc',fontSize:'1vw',marginTop:'18vh'}}>展览时间：2016.9.19-11.19</span>
      <span style={{position:'absolute',top:'10px',left:'14px',color:'#ccc',fontSize:'1vw',marginTop:'20vh'}}>展览地点：尤伦斯艺术中心</span>

        <img src={Img1} />



      <div className='zengfan-cue'>展览内容</div>
      <p>9月19日，中国当代艺术家曾梵志迄今位置规模最大、涵盖最广泛的展览《散步》将在尤伦斯当代艺术中心举行。<br />北京。9月19日，
        中国当代艺术家曾梵志迄今位置规模最大、涵盖最广泛的展览《散步》将在尤伦斯当代艺术中心举行。本次展览由UCCA馆长田霏雨和郭系联
        合策划，囊括以油彩、木材、金属、纸本等材料创作的60余件作品，反映了艺术家近30年的持续性创作概貌。</p>
      <div className='zengfan-imgcue'>
        <img src={Img2} />
        <div className='zengfan-cue'>作者介绍</div>

      </div>
        <p>曾梵志，1964年出生于湖北武汉市，1991年毕业于湖北美术学院油画系。从二十世纪九十年代起，曾梵志的创作以其独特的语言风格
          和敏锐的社会批判，受到评论界广泛的赞誉，也得到社会民众的持续关注。</p>
        <div className='zengfan-imgcue'>
        <div className='zengfan-cue'>作品展示</div>
        <img src={Img3} />
      </div>
      <img src={Img4} style={{marginBottom:'10px'}}/>
      <img src={Img5} style={{marginBottom:'10px'}}/>
      <img src={Img6}/>

      <CommentFooter />
  </div>
  )
  }
}
Zengfan.contextTypes = {
  router:React.PropTypes.object
}
export default Zengfan;
