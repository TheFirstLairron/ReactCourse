// State arg is not application state, just state this reducer is responsible for
export default function(state = null, action){

    switch(action.type)
    {
        case'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
}