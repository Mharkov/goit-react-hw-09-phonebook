import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './auth-actios';

const initialState = {
  name: null,
  email: null,
};

const isAuthorized = createReducer(false, {
  [authActions.loginSuccess]: () => true,
  [authActions.signupSuccess]: () => true,
  [authActions.currentSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.currentError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.signupError]: () => false,
});

const isLoading = createReducer(false, {
  [authActions.currentRequest]: () => true,
  [authActions.currentSuccess]: () => false,
  [authActions.currentError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,

  [authActions.logoutRequest]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,

  [authActions.signupRequest]: () => true,
  [authActions.signupSuccess]: () => false,
  [authActions.signupError]: () => false,
});

const user = createReducer(initialState, {
  [authActions.signupSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialState,
  [authActions.currentSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.signupSuccess]: (_, action) => action.payload.token,
  [authActions.loginSuccess]: (_, action) => action.payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.signupError]: () => (_, action) => action.payload,
  [authActions.loginError]: () => (_, action) => action.payload,
  [authActions.currentError]: () => (_, action) => action.payload,
  [authActions.logoutError]: () => (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  isLoading,
  error,
  isAuthorized,
});
