import React, { Component } from 'react';
import Animation from './Animation';
import Quiz from './Quiz';
import Explanation from './Explanation';
import { connect } from 'react-redux';

class Lesson extends Component {

  render() {
    return (
      <div className="lesson">
        <Explanation />
        <Animation/>
        <Quiz/>
      </div>
        );
  }
}

function mapStateToProps(state) {
  return { restart: state.restart, currentLesson: state.currentLesson };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchModules, setCurrentModule, setCurrentLesson }, dispatch);
// }


export default connect(mapStateToProps)(Lesson);
