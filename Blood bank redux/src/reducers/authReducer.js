import actionTypes from './actionTypes'

const initialState={
    authLogOut: false,
    authSignIn:[],
     firebaseval:{}
}


export default function authReducer(state=initialState,action){
   switch(action.type){
       case actionTypes.GetUserInfo:
       return{ ...state,
            authLogOut: !state.authLogOut, 
          }
           case actionTypes.SiginUpadte:
       return{ ...state,
            authLogOut: !state.authLogOut,
            firebaseval: action.payload,
            authSignIn:action.payload
          }
          default:
          return{
              state
          }
       }
   }
