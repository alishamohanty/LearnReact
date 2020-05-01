import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], actions) {
  switch (actions.type) {
  case types.CREATE_COURSE:
    return [...state, { ...actions.course }];
  case types.LOAD_COURSES_SUCCESS:
    return actions.courses;
  default:
    return state;
  }
}
