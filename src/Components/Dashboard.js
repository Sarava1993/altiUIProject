import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CONSTANTS } from '../utils/constants';
import * as actionCreators from '../Store/Actions/actions';
import '../App.css';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getDashboardDetails();
    }

  render() {
    return (
        <>
            <div className="row customDashboard">
                <div className="col-sm-12 customLogout">
                    <Link to="/">{CONSTANTS.LOGOUT}</Link>
                </div>
                <div className="col-sm-12 customDashboardHeader">
                    {CONSTANTS.DASHBOARD_TITLE}
                </div>
                {
                    this.props.dashboardDetails && this.props.dashboardDetails.map((dBoard, i) => {
                        return <div key={i} className="col-sm-3 customDashboardContent">
                            <div className="customHeading">{CONSTANTS.COMPANY_NAME}</div>
                            <div className="customContent">{dBoard.companyName}</div>
                            <div className="customHeading">{CONSTANTS.PERFORMANCE}</div>
                            <div className="customContent">{CONSTANTS.PERFORMANCE_DETAILS}</div>
                            <div className="customHeading">{CONSTANTS.REVENUE}</div>
                            <div className="customRevenue">{CONSTANTS.REVENUE_DETAILS}</div>
                        </div>
                    })
                }
            </div>
        </>
    );
  }
}

const mapStateToProps = ( state ) => {
    return {
        dashboardDetails: state.dashboardDetails
    };
};

const mapDispathToProps = ( dispatch ) => {
    return {
        getDashboardDetails: () => dispatch(actionCreators.getDashboardDetails())
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Dashboard);
