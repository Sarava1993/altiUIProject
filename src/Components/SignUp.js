import React from 'react';
import Textfield from './Textfield';
import Button from './Button';
import Radio from './Radio';
import Title from './Title';
import Dropdown from './Dropdown';
import { CONSTANTS } from '../utils/constants';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactTooltip from "react-tooltip";
import * as actionCreators from '../Store/Actions/actions';
import '../App.css';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            email: "",
            errMsg: "",
            gender: "",
            selectedCountry: "Select a Country",
            textRegex: new RegExp("^[a-zA-Z]+$"),
            emailRegex: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        }
    }

    handleUserName = (value) => {
        if(value === ""){
            this.setState({username: "", showSuccess: false})
        } else if((this.state.textRegex).test(value)) { 
            this.setState({username : value, showSuccess: false}); 
        }
    }
    handleFirstName = (value) => {
        if(value === ""){
            this.setState({firstName: "", showSuccess: false})
        } else if((this.state.textRegex).test(value)) { this.setState({firstName : value, showSuccess: false});}
    }
    handleLastName = (value) => {
        if(value === ""){
            this.setState({lastName: "", showSuccess: false})
        } else if((this.state.textRegex).test(value)) { this.setState({lastName : value, showSuccess: false}); }
    }
    handlePassword = (value) => {
        if(value === ""){
            this.setState({password: "", showSuccess: false});
        } else{
            this.setState({password: value, showSuccess: false});
        }
    }
    handleConfirmPassword = (value) => {
        if(value === ""){
            this.setState({confirmPassword: "", showSuccess: false});
        } else{
            this.setState({confirmPassword: value, showSuccess: false});
        }
    }
    handleEmail = (value) => {
        if(value === ""){
            this.setState({email: "", showSuccess: false});
        } else{
            this.setState({email: value, showSuccess: false});
        }
    }
    handleGenderChange = (value) => {
        this.setState({gender: value, showSuccess: false});
    }
    handleCountryChange = (value) => {
        this.setState({selectedCountry: value, showSuccess: false});
    }

    handleSignup = () => {
        var errMsg = "";
        if(this.state.username === ""){
            errMsg += "Please enter username. "
        } if(this.state.password === "" || this.state.confirmPassword === "" ||
            this.state.password !== this.state.confirmPassword ||
            this.state.password.length < 8 || this.state.confirmPassword.length < 8){
            errMsg += "Please enter validate password with length >= 8. "
        } if(!((this.state.emailRegex).test(this.state.email))){
            errMsg += "Please enter validate email id. "
        } if(this.state.firstName === ""){
            errMsg += "Please enter first name. "
        } if(this.state.lastName === ""){
            errMsg += "Please enter last name. "
        } if(this.state.gender === ""){
            errMsg += "Please select gender. "
        } if(this.state.selectedCountry === "Select a Country"){
            errMsg += "Please select country."
        }
        if(errMsg === ""){
            this.setState({showSuccess: true, username: "", password: "", confirmPassword: "",
            email: "", firstName: "", lastName: "", gender: "", selectedCountry: ""});
            this.props.storeUserDetails({username: this.state.username, password: this.state.password});
        } else{
            this.setState({errMsg, showSuccess: false});
        }
    }

  render() {
    let style = { position: "relative" };
    return (
        <div className="appIntro" style={style}>
            <Title title="SignUp"/>
            {
                this.state.errMsg !== "" && 
                <div className="customErrMsg">{this.state.errMsg}</div>
            }
            {
                this.state.showSuccess &&
                <div className="customSuccessMsg">
                    {CONSTANTS.SIGNUP_SUCCESS}
                </div>
            }
            <div data-tip="username" data-for="username">
                <Textfield label="Username" 
                    type="text" 
                    fieldKey="username" 
                    username={this.state.username}
                    handleUserName={this.handleUserName}/>
                <ReactTooltip id="username">{CONSTANTS.SIGNUP_USERNAME_TOOLTIP}</ReactTooltip>
            </div>
            <div data-tip="password" data-for="password">
                <Textfield 
                    label="Password" 
                    type="password" 
                    fieldKey="password"
                    password={this.state.password}
                    handlePassword={this.handlePassword}/>
                <ReactTooltip id="password">{CONSTANTS.SIGNUP_PASSWORD_TOOLTIP}</ReactTooltip>
            </div>
            <div data-tip="confirmPassword" data-for="confirmPassword">
                <Textfield 
                    label="Confirm Password" 
                    type="password" 
                    fieldKey="confirmPassword"
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    handleConfirmPassword={this.handleConfirmPassword}/>
                <ReactTooltip id="confirmPassword">{CONSTANTS.SIGNUP_CONFIRM_PASSWORD_TOOLTIP}</ReactTooltip>
            </div>
            <div data-tip="email" data-for="email">
                <Textfield 
                    label="Email Id" 
                    type="email" 
                    fieldKey="email"
                    email={this.state.email}
                    handleEmail={this.handleEmail}/>
                <ReactTooltip id="email">{CONSTANTS.SIGNUP_EMAIL_TOOLTIP}</ReactTooltip>
            </div>
            <div data-tip="firstName" data-for="firstName">
                <Textfield 
                    label="First Name" 
                    type="text" 
                    fieldKey="firstName" 
                    firstName={this.state.firstName}
                    handleFirstName={this.handleFirstName}/>
                <ReactTooltip id="firstName">{CONSTANTS.SIGNUP_FIRSTNAME_TOOLTIP}</ReactTooltip>
            </div>
            <div data-tip="lastName" data-for="lastName">
                <Textfield 
                    label="Last Name" 
                    type="text" 
                    fieldKey="lastName" 
                    lastName={this.state.lastName}
                    handleLastName={this.handleLastName}/>
                <ReactTooltip id="lastName">{CONSTANTS.SIGNUP_LASTNAME_TOOLTIP}</ReactTooltip>
            </div>
            <div data-tip="gender" data-for="gender">
                <Radio label="Gender" data={[{name: 'Male'}, {name: 'Female'}]} 
                    chkVal={this.state.gender}
                    handleGenderChange={this.handleGenderChange}/>
                <ReactTooltip id="gender">{CONSTANTS.SIGNUP_GENDER_TOOLTIP}</ReactTooltip>
            </div>
            <div data-tip="country" data-for="country">
                <Dropdown label="Country" countries={CONSTANTS.COUNTRY_LIST} 
                    selectedCountry={this.state.selectedCountry}
                    handleCountryChange={this.handleCountryChange}/>
                <ReactTooltip id="country">{CONSTANTS.SIGNUP_COUNTRY_TOOLTIP}</ReactTooltip>
            </div>
            <div data-tip="signupBtn" data-for="signupBtn">
                <Button btnName="SignUp" handleSignup={this.handleSignup}/>
                <ReactTooltip id="signupBtn">{CONSTANTS.SIGNUP_BTN_TOOLTIP}</ReactTooltip>
            </div>
            <div className="cardDetailsConfirm row">
                <div className="col-sm-12 text-center customText">
                    or
                </div>
                <div className="col-sm-12 text-center customText">
                    {CONSTANTS.LOGIN_HELP_TEXT}
                    <Link to="/">{CONSTANTS.LOGIN}</Link>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = ( state ) => {
    return {
        userData: state.userData
    };
};

const mapDispathToProps = ( dispatch ) => {
    return {
        storeUserDetails: (data) => dispatch(actionCreators.storeUserDetails(data))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(SignUp);
