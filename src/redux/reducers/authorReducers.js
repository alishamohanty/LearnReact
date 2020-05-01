import * as types from '../actions/actionTypes';
import initialState from './initailState';

export default function authorReducer(state = initialState.authors, actions) {
  switch (actions.type) {
  case types.LOAD_AUTHORS_SUCCESS:
    return actions.authors;
  default:
    return state;
  }
}
