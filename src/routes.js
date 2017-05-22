import React from 'react'

import Login from './containers/Login'
import Home from './containers/Home'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Login />
  },
  {
    path: '/home',
    main: () => <Home />
  }
]

export default routes
