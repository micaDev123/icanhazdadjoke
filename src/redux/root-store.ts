import { applyMiddleware, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

// @ts-ignore /* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function ConfigureStore() {
  return createStore(rootReducer, composeEnhancers());
}
