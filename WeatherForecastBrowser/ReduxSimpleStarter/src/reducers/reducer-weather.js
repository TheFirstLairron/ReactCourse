import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            // Make sure to never mutate state in here, always give new state(new object).
            //return state.concat([action.payload.data]);     <-- old way
            return [action.payload.data, ...state];      //   <-- new way
        default:
            return state;
    }
}