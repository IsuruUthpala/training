import { ADD_Q } from '../actions/types';
//import { ADD_A1 } from '../actions/mcqActions';
export default function mcqReducer(state = '', action) {
    //console.log(action);



    if (action.type === ADD_Q) {


        console.log('action reached');
        // debugger
        return action.payload.question;


    }



    return state;
} 