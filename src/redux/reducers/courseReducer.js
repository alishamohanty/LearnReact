import * as types from '../actions/actionTypes';
import initialState from  './initailState';

export default function courseReducer(state = initialState.courses, actions) {
  switch (actions.type) {
  case types.CREATE_COURSE_SUCCESS:
    return [...state, { ...actions.course }];
  case types.UPDATE_COURSE_SUCCESS:
    return state.map(course => 
      course.id === actions.course.id ? actions.course : course
    );
  case types.LOAD_COURSES_SUCCESS:
    return actions.courses;
  default:
    return state;
  }
}
