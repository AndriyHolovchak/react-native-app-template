export const LOGIN_REQUEST = 'VEEP/LOGIN_REQUEST'
export const LOGIN_FULFILLED = 'VEEP/LOGIN_FULFILLED'
export const LOGIN_REJECTED = 'VEEP/LOGIN_REJECTED'
export const LOGOUT = 'VEEP/LOGOUT'

export const loginFulfiled = (data) => ({
    type: LOGIN_FULFILLED,
    payload: data
})

export const loginRejected = (error) => ({
    type: LOGIN_REJECTED,
    payload: { error }
})

export const loginRequest = (user) => ({
  type: LOGIN_REQUEST,
  payload: { user }
})

export const logout = () => ({
  type: LOGOUT
})
