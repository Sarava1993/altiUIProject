import React from 'react';
import Textfield from './Textfield';
import Button from './Button';
import Title from './Title';
import { connect } from 'react-redux';
import * as actionCreators from '../Store/Actions/actions';
import { CONSTANTS } from '../utils/constants';
import { Link } from 'react-router-dom'; 
import ReactTooltip from "react-tooltip";
import '../App.css';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            showDashboard: false,
            showErrMsg: false,
            textRegex: new RegExp("^[a-zA-Z]+$"),
            emailRegex: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        }
    }

    componentDidMount() {
        this.props.getUserDetails();
    }

    handleUserName = (value) => {
        if(value === ""){
            this.setState({username: "", showErrMsg: false})
        } else if((this.state.textRegex).test(value)) { 
            this.setState({username : value, showErrMsg: false}); 
        }
    }

    handlePassword = (value) => {
        if(value === ""){
            this.setState({password: "", showErrMsg: false});
        } else{
            this.setState({password: value, showErrMsg: false});
        }
    }

    handleLogin = () => {
        this.props.userData.map((usrdata) => {
            if(usrdata.username === this.state.username &&
                usrdata.password === this.state.password){
                    this.setState({showDashboard: true})
            } else {
                this.setState({showErrMsg:true});
            }
        })
    }


  render() {
    let style = { position: "relative" };
    return (
        <>
            {
                this.state.showDashboard &&
                <div className="appIntro" style={style}>
                    <div className="customSuccessMsgHeader">
                        {CONSTANTS.WELCOME_MSG_ONE}
                    </div>
                    <div className="customSuccessLoginMsg">
                        {CONSTANTS.WELCOME_MSG_TWO}
                        <Link to="/dashboard">{CONSTANTS.WELCOME_MSG_THREE}</Link>
                    </div>
                </div>
            }
            {
                !(this.state.showDashboard) &&
                <div className="appIntro" style={style}>
                    <Title title="Login"/>
                    {
                        this.state.showErrMsg &&
                        <div className="customErrMsg">{CONSTANTS.LOGIN_ERR_MSG}</div>
                    }
                    <div data-tip="username" data-for="username">
                        <Textfield label="Username" 
                            type="text"
                            fieldKey="username" 
                            username={this.state.username}
                            handleUserName={this.handleUserName}/>
                        <ReactTooltip id="username">{CONSTANTS.LOGIN_USERNAME_TOOLTIP}</ReactTooltip>
                    </div>
                    <div data-tip="password" data-for="password">
                        <Textfield label="Password" type="password"
                            fieldKey="password"
                            password={this.state.password}
                            handlePassword={this.handlePassword}/>
                        <ReactTooltip id="password">{CONSTANTS.LOGIN_PASSWORD_TOOLTIP}</ReactTooltip>
                    </div>
                    <div data-tip="submitBtn" data-for="submitBtn">
                        <Button btnName="Login" handleLogin={this.handleLogin}/>
                        <ReactTooltip id="submitBtn">{CONSTANTS.LOGIN_BTN_TOOLTIP}</ReactTooltip>
                    </div>
                    <div className="cardDetailsConfirm row">
                        <div className="col-sm-12 text-center customText">
                            or
                        </div>
                        <div className="col-sm-12 text-center customText">
                            {CONSTANTS.CREATE_ACCOUNT_HELP_TEXT}
                            <Link to="/signup">{CONSTANTS.CREATE_ACCOUNT}</Link>
                        </div>
                    </div>
                </div>
            }
        </>
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
        getUserDetails: () => dispatch(actionCreators.getUsers())
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Login);