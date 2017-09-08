import { createStore } from 'redux';
import { trelloishReducer } from './reducers';

export default createStore(trelloishReducer);
