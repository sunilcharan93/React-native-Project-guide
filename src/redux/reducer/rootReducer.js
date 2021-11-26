import {combineReducers} from 'redux';
import {appReducer} from './appReducer';
import {authReducer} from './authReducer';

export const rootReducer = combineReducers({authReducer, appReducer});
