import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';


class Square extends React.Component {
  static propTypes = {
    cellValue: PropTypes.number,
    onClickSquare: PropTypes.func,
  }

  handleClick() {
    this.props.onClickSquare();
  }

  render(){
    return(
      <button 
        className={this.props.cellValue? 'blue-cell': 'yellow-cell'} 
        onClick={() => this.handleClick()}>
      </button>
    );
  }
}

export default Square;