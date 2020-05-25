import React from 'react';
import '../App.css';

class Title extends React.Component {
  render() {
    return (
        <div className="cardDetailsConfirm row">
            <div className="col-sm-12 title">{this.props.title}</div>
        </div>
    );
  }
}

export default Title;
