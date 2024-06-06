const initialState = null

const AuthUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export default AuthUserDataReducer;