import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"

import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import createHistory from "history/createBrowserHistory"
import store from "./store"
const history = createHistory()

import App from "./containers/App"

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <App/>
        
        </AppContainer>
    </Provider>
  ,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
            
                <NextApp/>
            
            </AppContainer>
        </Provider>
    , document.getElementById('app')
    )
  })
}