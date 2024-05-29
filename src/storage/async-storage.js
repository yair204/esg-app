import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAsyncStorageData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.warn("getAsyncStorageData error => ", e);
  }
}

export const getAsyncStorageDataWithParse = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    console.warn("getAsyncStorageDataWithParse error => ", e);
  }
}

export const storeAsyncStorageObject = async (key, obj) => {
  try {
    const jsonValue = JSON.stringify(obj)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.warn("storeAsyncStorageObject error => ", e);
  }
}

export const storeAsyncStorageValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, String(value))
  }
  catch (e) {
    console.warn("storeAsyncStorageValue error => ", e);
  }
}

export const removeAsyncStorageValue = async (key, value) => {
  try {
    await AsyncStorage.removeItem(key);
  }
  catch (e) {
    console.warn("storeAsyncStorageValue error => ", e);
  }
}

export const logCurrentStorage = () => {
  AsyncStorage.getAllKeys().then((keyArray) => {
    AsyncStorage.multiGet(keyArray).then((keyValArray) => {
      let myStorage = {};
      for (let keyVal of keyValArray) {
        myStorage[keyVal[0]] = keyVal[1]
      }

      console.log('CURRENT STORAGE: ', myStorage);
    })
  });
}

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  }
  catch (e){
    console.warn("storeAsyncStorageValue error => ", e)
  }
}