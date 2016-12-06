import React, { PropTypes } from 'react'

class Comment extends React.Component {
  handleClick(){
    this.props.handleClick()
  }
  render () {
    return(
      <div>
        
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
        </div>
          <div className='cf-manyshow' onClick={this.handleClick.bind(this)}>
            <p style={{color:'#444',fontSize:'2.5vh'}}>收起评论<span className="glyphicon glyphicon-chevron-up"></span></p>
          </div>
      </div>
    )
  }
}

export default Comment;
