import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "./App-reducer/AppReducer";
import { AuthReducer } from "./Auth-reducer/AuthReducer";

const rootRuducer = combineReducers({ AppReducer, AuthReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootRuducer,
  composeEnhancers(applyMiddleware(thunk))
);
