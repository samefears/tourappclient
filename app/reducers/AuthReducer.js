import types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  profile: {
    firstName: '',
    lastName: '',
    email: '',
  },
  id: '',
  error: '',
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        profile: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
        },
        token: action.payload.token,
        id: action.payload.id,
      };
    case types.LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
