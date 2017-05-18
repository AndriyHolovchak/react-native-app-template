// Effects
import { spawn, all } from 'redux-saga/effects'

// Watchers
import login from './login/saga'

// Subroutines
export default function* root() {
  yield all([
    spawn(login),
  ])
}
