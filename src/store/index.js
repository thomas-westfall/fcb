import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducer functions
import users from "./utilities/users";
import loggeduser from "./utilities/loggeduser"
import deckdata from "./utilities/deckdata";
import cards from './utilities/cards'

const rootReducer = combineReducers({users, deckdata, loggeduser, cards});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleware);

export default store;