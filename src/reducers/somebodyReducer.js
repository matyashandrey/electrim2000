import {CHANGE_SOMEBODY} from '../constants/actionsTypes';


export default function(state = {}, action){
    switch (action.type){
        case 'STORE_FOR_APP':
            return {
                name: action.payload
            };
        default:
            return state;
    }

}