import { ADD_A } from './types';
//import store from '../store';

export function addAnswer(newAnswer, id) {

    //const st = store.getState();

    console.log(id);

    return {

        type: ADD_A,
        payload: {

            id: id,

            answer: {

                // st.answer,

                newAnswer

            }
            // mcq: newQuiz

        }

    }

}