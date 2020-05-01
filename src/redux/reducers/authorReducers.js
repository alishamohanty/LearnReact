import * as types from '../actions/actionTypes';

export default function authorReducer(state = [], actions) {
  switch (actions.type) {
  case types.LOAD_AUTHORS_SUCCESS:
    return actions.authors;
  default:
    return state;
  }
}
