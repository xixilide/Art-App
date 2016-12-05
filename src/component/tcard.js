import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class TuiCard extends React.Component {
  render () {
    let styles={

    }
    let address = `item/${this.props.url}`;
    return(
      <div style={styles.root}>
        <div style={styles.index}><span style={styles.num}>{this.props.index}</span></div>
        <div style={styles.content}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
        </div>
      </div>
    )
  }
}

BlogCard.defaultProps={
  index:1,
  title:'这里是标题',
  desc:'这里是介绍'
}
BlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
export default TuiCard;
