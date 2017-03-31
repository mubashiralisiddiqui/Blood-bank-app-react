import actionTypes from './actionTypes'

const initialState={
    authLogOut: false,
    authSignIn:[]
}


export default function donordetail(state=initialState,action){
   switch(action.type){
       case actionTypes.GetDonorInfo:
       return{ ...state,
            authLogOut: !state.authLogOut    
          }
          default:
          return{
              state
          }
       }
   }
