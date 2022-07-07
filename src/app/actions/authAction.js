import authService from '../../service/auth/auth'
import * as types from '../types'


export const signin = (credentials) => async (dispatch) => {
  try {
    const user = await authService.onSignin(credentials)
    console.log(user)
    dispatch({
      type: types.SIGNIN_SUCCESS,
      payload: user,
    })
  } catch(err) {
    const message = (err && err.response && err.response.data && err.response.data.msg) || err.msg || err.toString()
    console.log(message)
    dispatch({
      type: types.SIGNIN_FAILURE,
      payload: message
    })
  }
}