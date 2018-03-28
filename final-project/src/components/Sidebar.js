import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchModules, setCurrentModule, setCurrentLesson } from '../actions';
import { bindActionCreators } from "redux";

class Sidebar extends Component {

  componentWillMount() {
    this.props.fetchModules().then(res => {
      this.props.setCurrentModule("1").then(res => {
        this.props.setCurrentLesson("1")
      })
    })
  }

  handleClick = (event) => {
    event.persist()
    this.props.setCurrentModule(event.target.getAttribute('module-id')).then(res => {
      this.props.setCurrentLesson(this.props.currentModule.mID, event.target.getAttribute('lesson-id'))
    })
  }

  render() {
    return (
      <div className="sidebar">
        <h2 className="mx-auto sidebar-header">Learning Modules</h2>
        <ul className="modules">
          {this.props.modules.map( (module, index) => {
            return (
              <details open className={`px-auto`} module-id={module.mID} key={module.mID}>
                <summary>{module.name}</summary>
                <ul>
                  {module.lessons.map( (lesson, index) => {
                    const currentLesson = this.props.currentModule.mID === module.mID && this.props.currentLesson.lID === lesson.lID ? "lesson-item active" : "lesson-item"
                    return (
                      <li className={currentLesson} onClick={this.handleClick} module-id={module.mID} lesson-id={lesson.lID} key={lesson.lID}>{lesson.name}</li>
                    )
                  })}
                </ul>
              </details>
            )
          })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { modules: state.modules, currentModule: state.currentModule, currentLesson: state.currentLesson };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchModules, setCurrentModule, setCurrentLesson }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
