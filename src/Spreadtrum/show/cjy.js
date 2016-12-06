 import React, { PropTypes } from 'react';
 import Img1 from '../../images/home/year/1.jpg'
 import Img2 from '../../images/home/year/2.jpg'
 import Img3 from '../../images/home/year/3.jpg'
 import Img4 from '../../images/home/year/4.jpg'
 import Img5 from '../../images/home/year/5.jpg'
 import Img6 from '../../images/home/year/6.jpg'
 import CommentFooter from '../../component/CommentFooter.js'
  class Cjy extends React.Component {
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
        border:'none'
      }
    }
    return(
      <div style={{width:"100vw"}} >
          <button className='cjy-button' type="button" onClick={this.handleBack.bind(this)}
             style={styles.btn}>
          <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
          </button>
          <div >
            <img src={Img1} style={{width:'100vw'}}/>
          </div>
          <div>
            <p className='cjy-p'>展览内容</p>
              <p className='cjy-p1'>曾健勇出生于广东澄海一个笃信基督教的家庭，在今天这牙膏一个“解构”、“去历史化”、“反宏大叙事”
              莫名奇妙流行的年代，他力图通过自己的思考、创作和展览，以“大洪荒”、“启示录”、“复乐园”三幕视觉场景，
              重建一个关于人类和自我的“编年史”。以时间为轴展开的三幕，既充满了历史的必然宿命，也展现来自身内部的
              复杂冲突--这是一个深处历史内部的当代艺术家力图对“历史”的理解和重写。</p>
            <h6 className='cjy-h6'>第一幕 大洪荒</h6>
              <p className='cjy-p1'>大洪荒是历史的终结者，也是历史的开端。上帝毁灭了旧人类，创造了新人类。义人诺在神的指引下，带领自己的家人和各种动物登上方舟，从而躲过灾难。新人诺亚把一年分为12个月，每个月30天
              ，“编年史”由此开始。大洪荒几乎在所有文明的源头中都能找到，然而，他不仅是一个关于正义与邪恶、忠告与背弃选择与放弃、毁灭与拯救的简故事，更是人类历史中不断重现的伦理“原型”。这里，它显现为
              一场旷日持久的战争。</p>
            <h6 className='cjy-h6'>第二幕 启示录</h6>
              <p className='cjy-p1'>战争是人类社会和人类历史永恒的主题，主宰巴比伦大城的大赤龙招来海上的兽，与样和样的信中激战。圣徒们最终获胜，灾难降临，巴比伦大城在一如之内土崩瓦解。
              上帝揭开第七封印，跟随龙和兽助纣为虐的罪人在末日审判中收到彻底hiumeide惩罚。启示录发生在何时？与大洪荒一样，在永恒的《圣经》中，在过去的《浮士德》中，
              在今天的“恐怖主义”，也在未来的语言中。末日审判之后，“编年史”由此翻篇，美丽的新世界再次显现。</p>
            <h6 className='cjy-h6'>第三幕 复乐园</h6>
              <p className='cjy-p1'>在东方，四条大河围绕灌溉之地，上帝为亚当和夏娃建造了伊甸园，大地上满是奇花异草和黄金珠宝，鸟兽不绝、五谷丰登。因受蛇之诱惑，他们偷食善恶树果，而被驱逐出乐园，终日辛勤。
              亚当夏娃之子该隐杀兄开始，人类进去一次有一次不断重复的“启示录”。末日审判之后历史再次轮回，完美之境重现，乐园失而复得，历史在这里得以永恒。然而，复乐园也可能是完美地狱，在这里，
              经验的历史永远继续，而精神的历史却依然完结。</p>
          </div>
          <div>
            <img src={Img2} style={{width:'100vw'}}/>
            <p className='cjy-p1'>曾建勇，男，1971 年11月出生于广东澄海，毕业与国立华侨大学艺术系中国画专业。
            进入中央美术学院版画研修班学习，职业：画家。
            </p>
          </div>
          <div>
            <img src={Img3} style={{width:'100vw'}}/>
          </div>
          <div>
            <img className="cjy-img" src={Img4} style={{width:'100vw'}}/>
          </div>
          <div>
            <img className="cjy-img" src={Img5} style={{width:'100vw'}}/>
          </div>
          <div>
            <img className="cjy-img" src={Img6} style={{width:'100vw'}}/>
          </div>
         
          <CommentFooter />
      </div>
    )
  }
}
Cjy.contextTypes = {
  router: React.PropTypes.object
};

export default Cjy;
