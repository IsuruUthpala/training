import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import mcqReducer from './reducers/mcqReducer';
import answerReducer from './reducers/answerReducer';
import incrementReducer from './reducers/incrementReducer';

const allReducers = combineReducers({
    mcq: mcqReducer,
    answer: answerReducer,
    counter: incrementReducer

});

// const rootReducer = (state = {}, action: Action) => {
//     const languageCodes = state.languages.map(language => language.code);
//     return {
//       languages: languages(state.languages, action),
//       // merge languageCodes with original action object, now you have access in translations reducer
//       translations: translations(state.translations, {...action, languageCodes})
//     };
//   };





const allStoreEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
    allReducers,


    allStoreEnhancers

);
export default store;
