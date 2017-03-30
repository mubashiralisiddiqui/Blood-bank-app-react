import {EXAMPLE} from '../actions/exampleAction';

export default function exampleReducer(state = "initial-state", action){
    switch(action.type){
        case EXAMPLE:
            return action.payload;
        default:
            return state;
    }
} 