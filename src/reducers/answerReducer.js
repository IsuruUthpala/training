import { ADD_A } from '../actions/types';

import store from '../store';

export default function answerReducer(state = [], action) {

    let shared;

    if (action.type === 'SHARE_COUNT') {

        console.log('state shared');

        console.log(action.payload);

        //shared=action.payload;



    }




    if (action.type === ADD_A) {


        console.log('state from answer');


        console.log(state);




        state.splice(action.payload.id - 1, 1, action.payload.answer);



        //return action.payload.answer;
        //state.push(action.payload.answer)




    }





    return state;
} 