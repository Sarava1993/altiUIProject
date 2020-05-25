import { put } from 'redux-saga/effects';
import * as actionTypes from '../Actions/actions';
import { userDetails } from '../../utils/userDetails';
import { dashboardDetails } from '../../utils/dashboardDetails';

export function* getUserDetails() {
    /*
        Here userDetails is stubbed response, actually we will
        get this from API call and sending it to success call to
        user details
    */ 
    yield put(actionTypes.getUserSuccess(userDetails))
}

export function* getDashbrdDetails() {
    /*
        Here dashboardDetails is stubbed response, actually we will
        get this from API call and sending it to success call to
        dashboard details
    */ 
    yield put(actionTypes.getDashboardDetailsSuccess(dashboardDetails))
}

export function* storeuserDetails(data) {
    /*
        This saga call is to make API call and store it database
        We can do API call using fetch, axios etc.
    */
}