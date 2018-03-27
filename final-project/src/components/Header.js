import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class Header extends Component {

  render() {
    return (
      <div className='container-fluid'>
        <div className='Header-bar row text-center'>
          <div className='col-2 py-3 cursor-pointer'><FontAwesomeIcon icon='bars' color='#283e48' size='lg' /></div>
          <div className='col-8 mt-2 Header-bar-brand'>Learn Physics</div>
          <div className='col-2 py-3'>Login</div>
        </div>
      </div>
    );
  }
}

export default Header;
