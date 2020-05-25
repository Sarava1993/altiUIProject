import * as actionTypes from '../Actions/actions';

const initialState = {
    counter: 0,
    userData: [],
    dashboardDetails: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_USER_SUCCESS:
            let usrData = action.res.concat({username: localStorage.getItem('username'),
                password: localStorage.getItem('password')})
            return {
                userData: usrData
            }
        case actionTypes.STORE_USER_DETAILS:
            localStorage.setItem('username', action.data.username);
            localStorage.setItem('password', action.data.password);
            return state;
        case actionTypes.GET_DASHBOARD_DETAILS_SUCCESS:
            return {
                dashboardDetails: action.res
            }
        default:
            return state;

    }
}

export default reducer;