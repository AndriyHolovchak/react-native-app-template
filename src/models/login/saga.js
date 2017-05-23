import { push } from 'react-router-redux'
import { call, put, select, takeLatest, fork, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { login_s as selectors } from '../_selectors.register'
import { login_a as actions } from '../_actions.register'
import { viewport_a as viewport_actions } from '../_actions.register'
import {loginApi, storeItem, clearItem, getItem} from '../../services'

function* authorize(email, password) {
  yield put(viewport_actions.updateViewport({spinner: true}))
  try {
    const userToken = yield call(loginApi, {email, password});
    //yield delay(3000);
    yield put(actions.loginFulfiled({isLogged: true}));
    yield call(storeItem, 'user_token', userToken)
  } catch (error) {
    yield put(actions.loginRejected(error));
  } finally {
    yield put(viewport_actions.updateViewport({spinner: false}))
  }
}

function* loginFlow(action) {
  const email = yield select(selectors.email)
  const password = yield select(selectors.password)
  yield call(authorize, email, password)
  const isLogged = yield select(selectors.isLogged)
   if(isLogged) {
     yield put(push('/home'))
  }
}

function* logout() {
  yield call(clearItem, 'user_token')
  yield fork(logoutApi)
  yield put(push('/'))
}

export default function* watcher() {
  const token = yield call(getItem, 'user_token')
  token ? yield put(actions.loginFulfiled({isLogged: true})) : yield put(actions.loginFulfiled({isLogged: false}));

  yield all([
    takeLatest(actions.LOGIN_REQUEST, loginFlow),
    takeLatest(actions.LOGOUT, logout)
  ]);
}
