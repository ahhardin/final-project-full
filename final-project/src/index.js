import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from "./reducers";
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

const store = createStore(rootReducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);

ReactDOM.render(<App />, document.getElementById('root'));
