
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../reducers/authReducer'
import donatedetailsreducer from '../reducers/donatedetailsreducer'
export default createStore(
    combineReducers({
        AuthReducer,
        donatedetailsreducer
    }), {}, (applyMiddleware(thunk))
);