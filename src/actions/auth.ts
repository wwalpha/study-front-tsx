import { Auth } from 'aws-amplify';
import { createAction } from 'redux-actions';
import {
  SIGN_IN_SUCCESS, SIGN_IN_FAILURE,
  SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  CONFIRM_SIGN_UP_SUCCESS, CONFIRM_SIGN_UP_FAILURE,
  SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE,
  CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE,
  FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_SUBMIT_SUCCESS,
  FORGOT_PASSWORD_SUBMIT_FAILURE,
} from '../constant/ActionTypes';

/** ログイン */
export const signIn = (username: string, password: string) =>
  Auth.signIn(username, password)
    .then(user => createAction(SIGN_IN_SUCCESS, user))
    .catch(err => createAction(SIGN_IN_FAILURE, err));

/** 登録 */
export const signUp = (username: string, password: string, email: string, phoneNumber: number) =>
  Auth.signUp({
    username,
    password,
    attributes: {
      email,
      phoneNumber,
    },
    validationData: [],
  })
    .then(data => createAction(SIGN_UP_SUCCESS, data))
    .catch(err => createAction(SIGN_UP_FAILURE, err));

/** 登録確認 */
export const confirmSignUp = (username: string, code: string) =>
  Auth.confirmSignUp(username, code)
    .then(data => createAction(CONFIRM_SIGN_UP_SUCCESS, data))
    .catch(err => createAction(CONFIRM_SIGN_UP_FAILURE, err));

/** ログアウト */
export const signOut = () =>
  Auth.signOut()
    .then(data => createAction(SIGN_OUT_SUCCESS, data))
    .catch(err => createAction(SIGN_OUT_FAILURE, err));

/** パスワード変更 */
export const changePassword = (oldPassword: string, newPassword: string) =>
  Auth.currentAuthenticatedUser()
    .then(user => Auth.changePassword(user, oldPassword, newPassword))
    .then(data => createAction(CHANGE_PASSWORD_SUCCESS, data))
    .catch(err => createAction(CHANGE_PASSWORD_FAILURE, err));

/** パスワードお忘れ */
export const forgotPassword = (username: string) =>
  Auth.forgotPassword(username)
    .then(data => createAction(FORGOT_PASSWORD_SUCCESS, data))
    .catch(err => createAction(FORGOT_PASSWORD_FAILURE, err));

/** パスワードお忘れ：確認 */
export const forgotPasswordSubmit = (username: string, code: string, newPassword: string) =>
  Auth.forgotPasswordSubmit(username, code, newPassword)
    .then(data => createAction(FORGOT_PASSWORD_SUBMIT_SUCCESS, data))
    .catch(err => createAction(FORGOT_PASSWORD_SUBMIT_FAILURE, err));
