import * as types from '../actions/actionTypes';
import initialState from './initailState';

function actionTypeEndsInSuccess(type) {
  debugger;
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function apiCallStatusReducer(
  state = initialState.apiCallInProgress,
  action
) {
  if (action.type == types.BEGIN_API_CALL) {
    debugger;
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    debugger;
    return state - 1;
  }
  return state;
}
