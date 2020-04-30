import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], actions) {
  switch (actions.type) {
  case types.CREATE_COURSE:
    return [...state, { ...actions.course }];
  default:
    return state;
  }
}
