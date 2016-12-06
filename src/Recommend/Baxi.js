import React, { PropTypes } from 'react';
import Img1 from '../images/recommend/baxi/1.gif'
import Img2 from '../images/recommend/baxi/2.gif'
import Img3 from '../images/recommend/baxi/3.gif'
import Img4 from '../images/recommend/baxi/4.gif'
import Img5 from '../images/recommend/baxi/5.gif'
import Img6 from '../images/recommend/baxi/6.gif'
import Img7 from '../images/recommend/baxi/7.gif'
import Img8 from '../images/littlepic/338.png'

import CommentFooter from '../component/CommentFooter';

class Baxi extends React.Component {
  render () {
  return(
      <div className='zengfan-wrap baxi-wrap'>
      <img src={Img8} style={{position:'absolute',top:'10px',left:'10px',width:'10vw',height:'10vw'}}
              onClick={this.context.router.goBack.bind(this)}/>

      <img src={Img1} />
      <p>来自巴西的摄影师 Nádia Maria 擅长以充满实验性及丰富情感的方式，以摄影传达埋藏在内心的情绪和想法。Nádia Maria
        在小时候就发现自己对摄影的兴趣，照相机从此成为她最钟爱的玩具。在 18 岁时，她真正学习摄影并逐渐在这条路上发光发热，
        在 Vogue、National Geographic 上都能看见这些令人惊艳的作品。Nádia Maria 将她的人生经历、生活小事都酝酿成摄影
        的养分，一点一滴的将故事注入每张照片，并结合不同的摄影技巧─这就是她的作品之所以吸引人的原因。</p>
      <img src={Img2} />
      <p>真空( Vaccum )系列，就是传达了她在怀孕时的空虚和忧郁，不断自我建立、又自我解构的过程；而香水( Perfume )系列则
        是将她生下儿子后，将产后忧郁的痛苦具体形象化、可视化的作品。这两系列完整表述了 Nádia Maria 在作为一个女人，经历怀
        孕和生产，探索自我和灵魂的历程。</p>
      <img src={Img3} />
      <p>另一系列作品时光飞逝( Tempus Fugit, Time Flies )，则是 Nádia Maria 在每天生活的城市巴西圣保罗，被引发出的灵感。
        夜晚街道上的拥嚷和时间一样，「咻！」地一下就过去了，任何东西都是瞬息而逝。她运用了多重曝光和夜光灯来表现这个意象，对忙
        碌城市、一闪即逝的瞬间是再适合不过的诠释。</p>
      <img src={Img4} />
      <p>Nádia Maria 的自我介绍文
我是Nádia Maria，生于 1984 年，是一名住在巴西圣保罗的摄影师，从事摄影已经有十年的时间。

我在七、八岁的时候开始接触摄影，拍的都是ㄧ些玩偶和玩具，虽然那时照片于我已经形成特殊的链接，但一直到青少年时期，这层链接变得更
为强大；相片逐渐成为我记录生活和人生转折的一种形式，是专属于我的日记。</p>
      <img src={Img5} />
      <p>我的作品经常带着浓厚的情感色彩。睡前独处的时刻、特殊的景象或日常生活中的小事都能成为我的灵感来源，而这些灵感都是新事物
        内化的一部分。我拍的照片是将我的情绪外放，是一种释放，因为摄影就是我表达的方式，有时候是一种疗愈，或甚至是不自觉的行为。
      </p>
      <img src={Img6} />
      <p>有些照片则是在忧郁、感到空虚的时刻，或持续自我建立、解构的过程中拍摄的。在我儿子 Zion 出生后，忧郁也随之而来。有一段
        时间我只感到自己和外在环境彷佛逐渐融合隐没，看不见起始点，医生告诉我那是产后忧郁症。几个月后我才了解，这个自我解构和转
        变的过程，正是让我学习怎么成为一位母亲，也或许是因为爱吧，内心逐渐有了身为母亲的感情。</p>
      <img src={Img7} />
      <p>有一系列的照片都是表达我在这个状态下，作为女人，赋予生命(在巴西我们说赋予光亮)，并且接受这个转变的内心。在透过与相机
        实验或游戏的过程中，或者是说面对我自己的试验和尝试，这些作品才逐渐产生。希望你们会喜欢我的作品。</p>
      <CommentFooter />
      </div>
  )
  }
}
Baxi.contextTypes = {
  router:React.PropTypes.object
}
export default Baxi;
