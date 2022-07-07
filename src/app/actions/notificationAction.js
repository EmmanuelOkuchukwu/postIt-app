import * as types from '../types'

export const setNotification = (message, time) => async (dispatch) => {
  dispatch({
    type: types.SET_MESSAGE,
    message
  })
  setTimeout(() => {
    dispatch({
      type: types.REMOVE_MESSAGE,
      message: null
    })
  }, time)
}