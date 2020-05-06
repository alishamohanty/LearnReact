// /* eslint-disable no-used-vars */
import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall } from './apiStatusActions';

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}
export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    debugger;
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((err) => {
        throw err;
      });
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
