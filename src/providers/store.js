import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import signUpReducer from '../reducers/signUpReducer'; 

const rootReducer = combineReducers({
  signUp: signUpReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
