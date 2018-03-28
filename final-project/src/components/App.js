import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Lesson from './Lesson';
import Header from './Header';
import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(regular, solid)


class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header/>
          <div className="container-fluid sidebar col-3">
            <Sidebar />
          </div>
          <div className="main-content col-9">
            <Lesson />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
