import { applyMiddleware, createStore } from 'redux';
import reducerList from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(
    reducerList,
    {},  //  Default State
    applyMiddleware(thunk)
);
