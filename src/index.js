import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../src/components/App';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import ReactDom from 'react-dom'
import {BrowserRouter, Switch} from 'react-router-dom'
import todoApp from './reducer/index'
import Home from './components/home'

const store = createStore(todoApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
window.store = store;

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Home />
        </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();