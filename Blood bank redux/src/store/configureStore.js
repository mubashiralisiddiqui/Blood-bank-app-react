import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from '../reducers';
import AuthReducer from '../reducers/authReducer'
import donatedetailsreducer from '../reducers/donatedetailsreducer'

// const configureStore = (initialState) => createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(thunk)
// );

// export default configureStore;
export default createStore(
    combineReducers({
        AuthReducer,
        donatedetailsreducer
    }), {}, (applyMiddleware(thunk))
);