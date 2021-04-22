import axios from 'axios';
import * as authActions from './auth-actios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = (payload) => async (dispatch) => {
  dispatch(authActions.signupRequest());

  try {
    const result = await axios.post('/users/signup', payload);
    token.set(result.data.token);
    dispatch(authActions.signupSuccess(result.data));
  } catch (error) {
    dispatch(authActions.signupError(error.message));
  }
};

export const login = (payload) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post('/users/login', payload)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })

    .catch((error) => dispatch(authActions.loginError(error.message)));
};

export const logout = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.currentRequest());
  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.currentSuccess(data)))
    .catch((error) => dispatch(authActions.currentError(error.message)));
};
