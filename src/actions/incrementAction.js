import { INCREMENT } from './types';
export function increment(value) {

    //const st = store.getState();

    //console.log(newQuiz);
    console.log('value passed by click');
    console.log(value);


    return {
        type: INCREMENT,
        payload: {

            count: {



                id: value + 1

            }
            // mcq: newQuiz

        }

    }

}