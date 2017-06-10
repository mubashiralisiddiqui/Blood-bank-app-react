// import actionTypes from './actionTypes'
import AuthAction from './../actions/authaction';
const initialState = {
    authLogOut: false,
    islogin:false,
    authSignInData: [],
    userinfo: [],
    signup:'',
    login:[],
    error:''
}


const authReducer = (state = initialState, action) =>{
    // console.log(action.donordata)
    switch (action.type) {
        case AuthAction.SIGNUP:{
            return state={
                ...state,
                authLogOut: !state.authLogOut,
                signup:action.payload
            }
        }
        case AuthAction.SIGNUPFAILED:{
            return state={
                ...state,
                authLogOut: state.authLogOut,
                authSignInData: action.payload,
                 error: action.payload,
            }
        }
         case AuthAction.LOGIN:{
            return state={
                ...state,
                authLogOut: !state.authLogOut,
                islogin:!state.islogin,
               userinfo:action.payload
            }
        }

    case AuthAction.LOGINFAILED:{
            return state={
                ...state,
                authLogOut: state.authLogOut,
               error:action.payload
            }
        }

        default:{return state;}
    }
    
}
export default authReducer;