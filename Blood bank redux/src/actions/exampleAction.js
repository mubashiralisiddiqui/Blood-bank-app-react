export const EXAMPLE = 'EXAMPLE';

// this example action creator returns action that is being used by the reducer '../reducers/exampleReducer'
export function exampleActionCreator(){
    
    return {
        type: EXAMPLE,
        payload: "This is an example"
    }
} 