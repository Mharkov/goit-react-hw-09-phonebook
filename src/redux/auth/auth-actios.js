import { createAction } from '@reduxjs/toolkit';

export const loginRequest = createAction('/users/login/request');
export const loginSuccess = createAction('/users/login/success');
export const loginError = createAction('/users/login/error');

export const signupRequest = createAction('/users/signup/request');
export const signupSuccess = createAction('/users/signup/success');
export const signupError = createAction('/users/signup/error');

export const logoutRequest = createAction('/users/logout/request');
export const logoutSuccess = createAction('/users/logout/success');
export const logoutError = createAction('/users/logout/error');

export const currentRequest = createAction('/users/current/request');
export const currentSuccess = createAction('/users/current/success');
export const currentError = createAction('/users/current/error');
