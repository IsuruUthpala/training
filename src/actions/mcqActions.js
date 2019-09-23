import $ from 'jquery';

//export const ADD_A1 = 'mcq:addA1';
import { ADD_Q } from './types';


export function addMcq(newQuiz) {

    //console.log(newQuiz);

    return {
        type: ADD_Q,
        payload: {

            question: newQuiz

            // mcq: newQuiz

        }

    }

}




export function apiPost(newQuiz, answer) {

    console.log(newQuiz, answer)
    console.log(answer);

    return dispatch => {
        fetch('http://localhost:3006/list', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newQuiz: newQuiz,
                answer: answer
            }),


        },
            // window.location.reload(true)
        );
    }



    //console.log(answer);
    //console

    // return dispatch => {


    //     $.ajax(

    //         {
    //             type: "POST",
    //             data: { newQuiz, answer },
    //             url: 'http://localhost:3006/list/',
    //             success(response) {


    //                 console.log('success');

    //                 // dispatch(addMcq(newQuiz));
    //             }
    //             ,
    //             error() {
    //                 console.log('error');
    //             }

    //         }
    //     );


    // }

}



// export function apiFetch() {

//     return dispatch => {


//         $.ajax(

//             {

//                 url: 'http://localhost:3006/list/',



//                 success(response) {


//                     console.log(response);

//                     // list(response);



//                 }
//                 ,
//                 error() {
//                     console.log('error');
//                 }

//             }
//         );


//     }

// }