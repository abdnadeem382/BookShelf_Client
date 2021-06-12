export default function user (state={}, action){
    switch(action.type){
        case 'USER_LOGIN':
            return {...state,login:action.payload}
        default:
            return state;
    }
}