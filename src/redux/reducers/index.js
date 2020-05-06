import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducers';
import apiCallsInProgress from './apiStatusReducers';

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
