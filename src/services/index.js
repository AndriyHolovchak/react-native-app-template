import { AsyncStorage } from 'react-native';
//const API_HOST = ''

export const loginApi = (auth) => {
  return fetch(`http://demo3398344.mockable.io/`, {
      method:'POST',
      body: JSON.stringify(auth),
  })
  .then((response) => {
      if (!response.ok) {
        return Promise.reject("Authentication Failed: Bad credentials")
      }

      return 'usertoken';
    }, err => {
        return Promise.reject('Something went wrong')
    })
}

export const storeItem = (title, data) => {
  AsyncStorage.setItem(title, JSON.stringify(data))
}

export const clearItem = (title) => {
  AsyncStorage.removeItem(title)
}

export const getItem = async (title) => {
  return await AsyncStorage.getItem(title)
}
