import React, { Component } from 'react';
import Animation from './Animation';
import Sidebar from './Sidebar';
import Lesson from './Lesson';
import Quiz from './Quiz';
import Header from './Header';
import fontawesome, { library } from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(regular, solid)


class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header/>
          <div className="sidebar col-3">
            <Sidebar />
          </div>
          <div className="main-content col-9">
            <Lesson />
            <Animation />
            <Quiz/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
