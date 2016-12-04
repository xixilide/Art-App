import React, { PropTypes } from 'react'
import {  Link} from 'react-router';

class Footer extends React.Component {
  render () {
  return(
    <div>
      <ol className="nav">
        <li><Link to="/" activeStyle={{background:'teal'}} onlyActiveOnIndex={true}>展览</Link></li>
        <li><Link to="/recommend" activeStyle={{background:'teal'}}>推荐</Link></li>
        <li><Link to="/release" activeStyle={{background:'teal'}}>发布</Link></li>
        <li><Link to="/person" activeStyle={{background:'teal'}}>个人</Link></li>
      </ol>
    </div>
  )
  }
}

export default Footer;
