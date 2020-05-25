import React from 'react';
import '../App.css';

class Textfield extends React.Component {

    
    render() {
        return (
            <div className="cardDetailsConfirm row">
                <div className="col-sm-12 label">{this.props.label}<span>{" *"}</span></div>
                <div className="col-sm-12">
                    {
                        (this.props.fieldKey === "username") &&
                        <div>
                        <input type={this.props.type} placeholder={"Enter " + this.props.label} 
                            className="customTextfield"
                            value={this.props.username}
                            onChange={(e) => this.props.handleUserName(e.target.value)}
                        /></div>
                    }
                    {
                        this.props.fieldKey === "password" &&
                        <input type={this.props.type} placeholder={"Enter " + this.props.label} 
                            className="customTextfield"
                            value={this.props.password}
                            onChange={(e) => this.props.handlePassword(e.target.value)}
                        />
                    }
                    {
                        this.props.fieldKey === "confirmPassword" &&
                        <input type={this.props.type} placeholder={"Enter " + this.props.label} 
                            className="customTextfield"
                            disabled={this.props.password === ""}
                            value={this.props.confirmPassword}
                            onChange={(e) => this.props.handleConfirmPassword(e.target.value)}
                        />
                    }
                    {
                        this.props.fieldKey === "email" &&
                        <input type={this.props.type} placeholder={"Enter " + this.props.label} 
                            className="customTextfield"
                            value={this.props.email}
                            onChange={(e) => this.props.handleEmail(e.target.value)}
                        />
                    }
                    {
                        this.props.fieldKey === "firstName" &&
                        <input type={this.props.type} placeholder={"Enter " + this.props.label} 
                            className="customTextfield"
                            value={this.props.firstName}
                            onChange={(e) => this.props.handleFirstName(e.target.value)}
                        />
                    }
                    {
                        this.props.fieldKey === "lastName" &&
                        <input type={this.props.type} placeholder={"Enter " + this.props.label} 
                            className="customTextfield"
                            value={this.props.lastName}
                            onChange={(e) => this.props.handleLastName(e.target.value)}
                        />
                    }
                </div>
            </div>
    );
  }
}

export default Textfield;
