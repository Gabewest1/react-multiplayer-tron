import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { routerReducer, routerMiddleware } from "react-router-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import reducers from "./reducers"


const reduxRouterMiddleware = routerMiddleware()

const store = createStore(
    combineReducers({...reducers, router: routerReducer}),
    composeWithDevTools(applyMiddleware(thunk, reduxRouterMiddleware))
)

export default store