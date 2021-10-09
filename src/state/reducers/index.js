import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const reducerList = combineReducers({
    account: accountReducer
});

export default reducerList;

