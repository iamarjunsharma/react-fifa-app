import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// import css
import './styles/style.scss';

// import the App component
import App from './components/App';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

// render App component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);