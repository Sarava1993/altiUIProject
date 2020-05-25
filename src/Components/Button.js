import React from 'react';
import '../App.css';

class Button extends React.Component {
  render() {
    return (
        <div className="cardDetailsConfirm row">
            <div className="col-sm-12 text-right">
                <button className="customBtn" onClick={this.props.btnName === "SignUp" ?
                 () => this.props.handleSignup() : (this.props.btnName === "Login" ? 
                 () => this.props.handleLogin()
                 : "")}>
                    {this.props.btnName}
                </button>
            </div>
        </div>
    );
  }
}

export default Button;
