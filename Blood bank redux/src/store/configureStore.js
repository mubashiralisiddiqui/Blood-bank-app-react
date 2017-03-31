import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import AuthReducer from '../reducers/authReducer'
// const configureStore = (initialState) => createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(thunk)
// );

// export default configureStore;
export default createStore(
    combineReducers({
        AuthReducer,
    }),{},(applyMiddleware(thunk))
);