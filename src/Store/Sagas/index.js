import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../Actions/actions';
import { getUserDetails, storeuserDetails, getDashbrdDetails } from './auth';

export function* watchSagas() {
    yield takeEvery(actionTypes.GET_USERS, getUserDetails)
    yield takeEvery(actionTypes.GET_DASHBOARD_DETAILS, getDashbrdDetails)
    yield takeEvery(actionTypes.STORE_USER_DETAILS, storeuserDetails)
}