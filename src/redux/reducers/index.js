import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducers';

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
