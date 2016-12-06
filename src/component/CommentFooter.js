import React, { PropTypes } from 'react';
import Comment from './Comment';
import Img1 from '../images/home/map/map.png';
import Share from './Share';
class CommentFooter extends React.Component {
  constructor(){
    super();
    this.state={
      manyShow:true,
      manyShow1:true,
      manyShow2:true,
      manyShow3:true,
      manyShow4:true
    }
  }
  handleClick(){
    this.setState({
      manyShow:!this.state.manyShow
    })
  }
  handleClick1(){
    this.setState({
      manyShow1:!this.state.manyShow1
    })
  }
  handleClick2(){
    this.setState({
      manyShow2:!this.state.manyShow2
    })
  }
  handleClick3(){
    this.setState({
      manyShow3:!this.state.manyShow3
    })
  }
  handleClick4(){
    this.setState({
      manyShow4:!this.state.manyShow4
    })
  }
  render () {
    let showMany = this.state.manyShow ? <div className='cf-manyshow'>
      <p style={{color:'#444',fontSize:'2.5vh'}}>展开全部123条评论<span className="glyphicon glyphicon-chevron-down"></span></p>
    </div> : <Comment handleClick={this.handleClick.bind(this)}/>

    let like = this.state.manyShow1 ? <span className="glyphicon glyphicon-heart-empty"></span> :
                <span className="glyphicon glyphicon-heart" style={{color:'red'}}></span>

    let goThere = this.state.manyShow2 ? null : <img src={Img1} style={{position:'absolute',left:'0',bottom:'10vh'}}/>
  let share = this.state.manyShow3 ? null : <Share handleClick3={this.handleClick3.bind(this)}/>

    return(
      <div className='cf-wrap'>
        <div className='zengfan-cue'>展览评论</div>
        <div className='cf-comment'>
          <div className='cf-nowshow'>
            <div className='cf-nowshow-img'></div>
            <div className='cf-nowshow-text'>
              <span style={{fontSize:'4vw',fontWeight:'bold'}}>阿德</span><br />
              <span style={{fontSize:'1.2vw'}}>2016.11.12</span><br />
              <span style={{marginTop:'1vh',display:'block'}}>挺好的喜欢这种风格</span>
            </div>
          </div>
          <div className='cf-nowshow'>
            <div className='cf-nowshow-img'></div>
            <div className='cf-nowshow-text'>
              <span style={{fontSize:'4vw',fontWeight:'bold'}}>阿德</span><br />
              <span style={{fontSize:'1.2vw'}}>2016.11.12</span><br />
              <span style={{marginTop:'1vh',display:'block'}}>挺好的喜欢这种风格</span>
            </div>
          </div>
          <div onClick={this.handleClick.bind(this)}>
            {showMany}
          </div>
        </div>

        <div className='cf-footer'>
          <div className='cf-footer1' onClick={this.handleClick1.bind(this)}>{like}关注</div>
          {goThere}

          <div className='cf-footer2' onClick={this.handleClick2.bind(this)}><span className="glyphicon glyphicon-screenshot"></span>到这</div>
          {share}
          <div className='cf-footer3' onClick={this.handleClick3.bind(this)}><span className="glyphicon glyphicon-share"></span>分享</div>
          <div className='cf-footer4' onClick={this.handleClick4.bind(this)}><span className="glyphicon glyphicon-comment"></span>评论</div>
        </div>
      </div>
    )
  }
}

export default CommentFooter;
