import { storeAsyncStorageValue } from "../storage/async-storage"
import keys from "../storage/storage-keys";

const initialState = {
    isManager: false,
}

const UserRoleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_MANAGER':
          storeAsyncStorageValue(keys.isManager, action.payload);
          return {
            ...state,
            isManager: action.payload,
          };
        default:
          return state;
      }
};

export default UserRoleReducer;