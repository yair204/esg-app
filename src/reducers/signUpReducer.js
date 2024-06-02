import { storeAsyncStorageValue, clearAsyncStorage } from "../storage/async-storage";
import keys from "../storage/storage-keys";

const initialState = {
  isSignUp: false,
  isLoading: true,
};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP': {
      storeAsyncStorageValue(keys.isSignUped, true);
      return {
        ...state,
        isSignUp: true,
        isLoading: false,
      };
    }
    case 'LOGOUT':
      storeAsyncStorageValue(keys.isSignUped, false);
      clearAsyncStorage();
      return {
        ...state,
        isSignUp: false,
        isLoading: false,
      };
    case 'REMOVE_USER':
      storeAsyncStorageValue(keys.isSignUped, false);
      clearAsyncStorage();
      return {
        ...state,
        isSignUp: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default SignUpReducer;
