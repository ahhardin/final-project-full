import React, { Component } from 'react';
import Animation from './Animation';
import Quiz from './Quiz';
import Explanation from './Explanation';
import { connect } from 'react-redux';

class Lesson extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.restart !== nextProps.restart) {
      this.render()
    }
 }

  render() {
    return (
      <div className="lesson">
        <Explanation />
        <Animation restart={this.props.restart}/>
        <Quiz/>
      </div>
        );
  }
}

function mapStateToProps(state) {
  return { restart: state.restart };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchModules, setCurrentModule, setCurrentLesson }, dispatch);
// }


export default connect(mapStateToProps)(Lesson);
