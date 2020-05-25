export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USERS = 'GET_USERS';
export const GET_DASHBOARD_DETAILS = 'GET_DASHBOARD_DETAILS';
export const GET_DASHBOARD_DETAILS_SUCCESS = 'GET_DASHBOARD_DETAILS_SUCCESS';
export const STORE_USER_DETAILS = 'STORE_USER_DETAILS';

export const getUsers = () => {
    return {
        type: GET_USERS
    }
}

export const getUserSuccess = (data) => {
    /*
    We will get data from API response and storing in our
    reducer. But, as of now we are using stub data from
    sagas to load in reducer
    */
   return {
       type: GET_USER_SUCCESS,
       res: data
    }
}

export const getDashboardDetails = () => {
    return {
        type: GET_DASHBOARD_DETAILS
    }
}

export const getDashboardDetailsSuccess = (data) => {
    /*
    We will get data from API response and storing in our
    reducer. But, as of now we are using stub data from
    sagas to load in reducer
    */
    return {
        type: GET_DASHBOARD_DETAILS_SUCCESS,
        res: data
    }
}

export const storeUserDetails = (payload) => {
    return {
        type: STORE_USER_DETAILS,
        data: payload
    }
}
