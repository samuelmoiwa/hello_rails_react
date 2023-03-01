import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Routers } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';


ReactDOM.render(
  <Provider store={store}>
    <Routers>
      <App/>
    </Routers>
  </Provider>,
  document.getElementById('root'),
);
