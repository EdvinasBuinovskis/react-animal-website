import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { animalDetailsReducer, animalListReducer } from './reducers/animalReducers';

const initialState = {};
const reducer = combineReducers({
    animalList: animalListReducer,
    animalDetails: animalDetailsReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;