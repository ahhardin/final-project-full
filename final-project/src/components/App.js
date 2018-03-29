import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Lesson from './Lesson';
import Header from './Header';
import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import { connect } from 'react-redux';
import { fetchModules, setCurrentModule, setCurrentLesson } from '../actions';
import { bindActionCreators } from "redux";

fontawesome.library.add(regular, solid)


class App extends Component {

  componentDidMount() {
    const mID = localStorage.getItem("mID")
    const lID = localStorage.getItem("lID")

    if (mID&&lID) {
      this.props.fetchModules().then(res => {
        this.props.setCurrentModule(mID).then(res => {
          this.props.setCurrentLesson(mID,lID).then(res => {
            this.forceUpdate()
          })
        })
      })
    }
    else {
      this.props.fetchModules().then(res => {
        this.props.setCurrentModule("1").then(res => {
          this.props.setCurrentLesson("1","1").then(res => {
            this.forceUpdate()
          })
        })
      })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header/>
          <div className="container-fluid sidebar col-3">
            <Sidebar />
          </div>
          <div className="main-content col-9">
            <Lesson currentLesson={this.props.currentLesson}/>
          </div>
        </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
