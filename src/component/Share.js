import React, { PropTypes } from 'react'

class Share extends React.Component {
  render () {
    return(
      <div className='share-wrap'>
        <p style={{color:'#333',textAlign:'center',fontSize:'16px'}}>分享到</p>
        <div className='share-index'>
          <div></div>
        </div>
      </div>
    )
  }
}

export default Share;
