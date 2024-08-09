import { storeAsyncStorageValue } from "../storage/async-storage";
import {getLanguage} from '../i18n/index'


const initialState ={
  language: "en",
  deviceLanguage: getLanguage(),
}

const LanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      {
        storeAsyncStorageValue("language", action.payload);
        return {
          ...state,
          language: action.payload
        };
      }
    case 'CHANGE_DEVICE_LANGUAGE':
      {
        return {
          ...state,
          deviceLanguage: action.payload
        };
      }
    default:
      return state;
  }
};

export default LanguageReducer;
