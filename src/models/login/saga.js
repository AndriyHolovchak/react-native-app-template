//import { push } from 'react-router-redux'
import { takeLatest, all } from 'redux-saga/effects'

import { login_s as selectors } from '../_selectors.register'
import { login_a as actions } from '../_actions.register'

export function* updateUserName(user) {
  const userId = yield select(selectors.name)
  console.log(userId)
}

export function* updateUserID() {
  const userId = yield select(selectors.id)
  yield put(actions.updateUserName(`${userId}-Bob`))
}

export default function* watcher() {
  yield all([
    takeLatest(actions.UPDATE_USER_ID, updateUserID)
  ])
}
