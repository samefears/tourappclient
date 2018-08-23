/*
** Add new action constant types to this array
 */
const constants = ['LOGIN_USER', 'LOGOUT_USER', 'SIGNUP_USER', 'LOGIN_ERROR'];

const toExport = {};
constants.forEach((type) => {
  toExport[type] = type;
});

export default toExport;
