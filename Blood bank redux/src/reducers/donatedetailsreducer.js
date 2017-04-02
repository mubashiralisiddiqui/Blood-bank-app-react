import actionTypes from './actionTypes'

const initialState={
    authLogOut: false,
    authSignInData: [],
    userinfo: [],
    donor:["hello"]
}


const donatedetailsreducer=(state=initialState, action) =>{
    console.log(action.donorinfo)
    switch (action.type) {
        case actionTypes.AllDonorInfo:
            return state={
                ...state,
                authLogOut: !state.authLogOut,
                donor: action.donorinfo
            }
            default:{return state;}
    }
    
}
export default donatedetailsreducer;