import actionTypes from './actionTypes'

const initialState = {
    authLogOut: false,
    authSignInData: [],
    userinfo: [],
    donor: ["hello"]
}
const donatedetailsreducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AllDonorInfo:
            return state = {
                ...state,
                authLogOut: !state.authLogOut,
                donor: action.donorinfo
            }
        default: { return state; }
    }
}
export default donatedetailsreducer;