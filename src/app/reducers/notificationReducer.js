import * as types from '../types'

const initialState = null

export const notificationReducer = (state = initialState, action) => {
  const { message, type } = action
  switch(type) {
  case types.SET_MESSAGE:
    return message
  case types.REMOVE_MESSAGE:
    return message
  default: return state
  }
}