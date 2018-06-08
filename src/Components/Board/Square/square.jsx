import React from 'react';
import PropTypes from 'prop-types';


export default class square extends React.Component{
  static propTypes = {
    black: PropTypes.bool
  };
  render(){
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black'; 
    
    const style = {
      width: '100px',
      height: '100px',
      backgroundColor: fill,
      color: stroke,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
    return(
      <div style={style}>
        {this.props.children}
      </div>
      
    )
  }
}