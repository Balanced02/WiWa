import {LOGIN} from '../redux-constants';

export const startLogin = sendObj => {
  console.log(sendObj);
  return dispatch => {
    dispatch({
      type: LOGIN,
    });
  };
};
