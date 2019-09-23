import { INCREMENT } from '../actions/types';

export default function incrementReducer(state = [{ id: 1 }], action) {




    if (action.type === INCREMENT) {

        //var arr = state;
        console.log('action payload');
        console.log(action.payload.count);

        state.push(action.payload.count)

        // console.log(state);





        return state;


    }



    return state;
} 