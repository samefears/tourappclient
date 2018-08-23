import types from './types';
import axios from 'axios';

import { ENDPOINT } from '../../config/index.js';

/**
 * * Signup User Action
 *
 * @param {String} email - email of user signing in
 * @param {String} password - password of user signing in
 * @param {String} firstName - firstName of user signing in
 * @param {String} lastName - lastName of user signing in
 * @param {Function} cb - lastName of user signing in
 *
 * @returns {Function} Dispatch function for Redux
 */
export const signupUser = (email, password, firstName, lastName) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(`${ENDPOINT}/signup`, {
        email,
        password,
        firstName,
        lastName,
      });

      localStorage.setItem('tourToken', JSON.stringify(res.data));

      dispatch({ type: types.LOGIN_USER, payload: res.data });
      resolve(res.data);
    } catch (err) {
      dispatch({ type: types.LOGIN_ERROR, payload: err.response.data });
      localStorage.removeItem('tourToken');
      reject(err.response.data);
    }
  });
};

/**
 * * Login User Action
 *
 * @param {String} email - email of user logging in
 * @param {String} password - password of user logging in
 *
 * @returns {Function} Dispatch function for Redux
 */
export const loginUser = (email, password) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(`${ENDPOINT}/signin`, {
        email,
        password,
      });

      localStorage.setItem('tourToken', JSON.stringify(res.data));
      dispatch({ type: types.LOGIN_USER, payload: res.data });
      resolve(res.data);
    } catch (err) {
      dispatch({ type: types.LOGIN_ERROR, payload: err.response.data });
      localStorage.removeItem('tourToken');
      reject(err.response.data);
    }
  });
};

/**
 * * Logout User Action
 *
 * @returns {Object} Redux action
 */
export const logoutUser = () => {
  localStorage.removeItem('tourToken');
  return { type: types.LOGOUT_USER };
};
