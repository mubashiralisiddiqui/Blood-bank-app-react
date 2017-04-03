import actionTypes from './actionTypes'

const initialState = {
    authLogOut: false,
    authSignInData: [],
    userinfo: [],
    donor:["hello datta"]
}


const authReducer = (state = initialState, action) =>{
    // console.log(action.donordata)
    switch (action.type) {
        case actionTypes.AllDonorInfo:{
            return state={
                ...state,
                authLogOut: !state.authLogOut,
                donor:action.donordata
            }
        }
        case actionTypes.SiginUpadte:{
            return state={
                ...state,
                authLogOut: !state.authLogOut,
                authSignInData: action.payload,
            }
        }
        default:{return state;}
    }
    
}
export default authReducer;