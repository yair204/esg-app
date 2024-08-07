import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import signUpReducer from '../reducers/signUpReducer'; 
import UserRoleReducer from "../reducers/userRoleReducer";
import AuthUserDataReducer from "../reducers/authUserDataReducer";
import LanguageReducer from "../reducers/languageReducer";


const rootReducer = combineReducers({
  signUp: signUpReducer,
  userRole: UserRoleReducer,
  authUserData: AuthUserDataReducer,
  language: LanguageReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
