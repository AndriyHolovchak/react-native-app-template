export const UPDATE_USER_NAME = 'VEEP/UPDATE_USER_NAME'
export const UPDATE_USER_ID = 'VEEP/UPDATE_USER_ID'

export const updateUserId = (id) => ({
  type: UPDATE_USER_ID,
  data: { id }
})

export const updateUserName = (name) => ({
  type: UPDATE_USER_NAME,
  data: { name }
})
