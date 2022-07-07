import * as types from '../types'

const user = JSON.parse(localStorage.getItem('userJwt'))
const initialState = {
  user: user ? user : null,
  error: false,
  loading: false,
  message: '',
  success: false
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
  case types.SIGNIN_SUCCESS:
    return {
      ...state,
      user: payload,
      loading: false,
      error: false,
      message: 'Signed In Successfully!',
      success: true
    }
  case types.SIGNIN_FAILURE:
    return {
      error: true,
      message: payload,
      success: false
    }
  default: return state
  }
}