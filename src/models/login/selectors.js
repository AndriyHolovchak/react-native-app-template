import get from 'lodash/get';

/**
 * Selectors are useful to compute derived data from the Redux store.
 * Selectors are functions that accept the Redux store as an argument, and return
 * specific keys from it.
 */

/**
 * Derives a profile from the Redux store.
 *
 * @param  {Object} state The Redux store of the application
 * @return {Any}          Profile information
 */
export const email = (state) => get(state, ['login', 'user', 'email'])
export const password = (state) => get(state, ['login', 'user', 'password'])
export const isLogged = (state) => get(state, ['login', 'isLogged'])
