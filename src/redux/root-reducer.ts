import { combineReducers } from 'redux';
import generator from './generator/generator.reducer';

const rootReducers = combineReducers({generator});

export default rootReducers;
