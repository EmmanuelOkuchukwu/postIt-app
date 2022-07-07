import * as types from '../types'

const initialState = {
  signup: false
}

export const userReducer = (state = initialState, action) => {
  const { type } = action
  switch(type) {
  case types.SIGNUP_SUCCESS:
    return {
      ...state,
      signup: true
    }
  case types.SIGNIN_FAILURE:
    return {
      signup: false
    }
  default: return state
  }
}

