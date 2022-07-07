import * as types from '../types'
import userService from '../../service/user/user'

export const signup = (credentials) => async (dispatch) => {
  try {
    const user = await userService.onSignup(credentials)
    dispatch({
      type: types.SIGNUP_SUCCESS,
      payload: user
    })
  } catch(err) {
    const message = (err && err.response && err.response.data && err.response.data.msg) || err.msg || err.toString()
    dispatch({
      type: types.SIGNIN_FAILURE,
      payload: message
    })
  }
}