import Routes from './routes';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)