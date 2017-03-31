import actionTypes from './actionTypes'

const initialState = {
    authLogOut: false,
    authSignInData: [],
    userinfo: []
}


const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        // case actionTypes.GetUserInfo:{
        //     return state={
        //         ...state,
        //         authLogOut: !state.authLogOut,
        //         userinfo:action.userinfo
        //     }
        // }
        case actionTypes.SiginUpadte:{
            return state={
                ...state,
                authLogOut: !state.authLogOut,
                authSignInData: action.payload,
            }
        }

    }
    return state;
}
export default authReducer;