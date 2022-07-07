import * as types from '../types'

const initialState = {
  success: false,
  message: ''
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
  case types.SIGNUP_SUCCESS:
    return {
      ...state,
      success: true,
      message: 'You have successfully registered!'
    }
  case types.SIGNIN_FAILURE:
    return {
      success: false,
      message: payload
    }
  default: return state
  }
}

