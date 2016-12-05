import React, { PropTypes } from 'react'
import headerpic from '../images/littlepic/16.png'

class Header extends React.Component {
  render () {
    return(
      <div className="header">
        <img src={headerpic} className="headerpic"/>
      </div>
    )
  }
}

export default Header;
