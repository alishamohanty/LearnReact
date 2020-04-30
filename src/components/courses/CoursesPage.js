import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: '',
    },
  };
  // this.handleChange = this.handleChange.bind(this);

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    // console.log('Inside handleChange');
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
    // console.log('Submitted');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        ></input>
        <input type="submit" value="Submit"></input>
        {this.props.courses.map((course) => {
          <div key={course.title}>{course.title}</div>;
        })}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  // console.log(state.courses);
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesPage);
