import React from 'react'

import Login from './containers/Login'
import Home from './containers/Home'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/login',
    main: () => <Login />
  }
]

export default routes
