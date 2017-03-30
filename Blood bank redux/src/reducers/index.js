import {combineReducers} from 'redux';

import exampleReducer from './exampleReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    example: exampleReducer,
    auth:authReducer
});
export default rootReducer;