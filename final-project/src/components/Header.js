import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class Header extends Component {

  render() {
    return (
      <div className='container-fluid'>
        <div className='Header-bar row text-center'>
          <div className='col-2 my-auto cursor-pointer header-text'><FontAwesomeIcon icon='bars' color='#B2AC82' size='lg' /></div>
          <div className='col-8 my-auto Header-bar-brand'>Physics Playground</div>
          <div className='col-2 header-text my-auto'>Login</div>
        </div>
      </div>
    );
  }
}

export default Header;
