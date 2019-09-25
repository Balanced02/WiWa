import {LOGIN} from '../redux-constants';

const authReducer = (
  state = {
    token: null,
    user: {},
    authenticated: true,
  },
  action,
) => {
  switch (action.type) {
    case LOGIN:
      return action.data
        ? {
            ...state,
            isFetching: false,
            authenticated: true,
            token: action.data.token,
            user: action.data.data,
            message: 'Login Success',
          }
        : {
            ...state,
            isFetching: false,
            token: null,
            user: {},
            authenticated: false,
            message: 'Login Fail',
          };
    default:
      return state;
  }
};

export default authReducer;
