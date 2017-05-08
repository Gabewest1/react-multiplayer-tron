import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducers from "./reducers"


const reduxRouterMiddleware = routerMiddleware()

const store = createStore(
    combineReducers({...reducers, router: routerReducer}),
    composeWithDevTools(applyMiddleware(reduxRouterMiddleware))
)

export default store