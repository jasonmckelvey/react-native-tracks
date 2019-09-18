import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signup', {email, password});
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with Sign Up',
      });
    }
  };
};

const signin = dispatch => {
  return ({email, password}) => {
    // Try to sign in
    // Handle success by updateing state
    // Hanlde failure by showing error
  };
};

const signout = dispatch => {
  return () => {
    // somehow sing out
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {isSignedIn: false, errorMessage: ''},
);
