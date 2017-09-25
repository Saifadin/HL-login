import {REHYDRATE} from 'redux-persist/constants'

export const SWITCH_LANGUAGE = 'language/SWITCH_LANGUAGE'

const initialState = {
  language: 'DE'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        language: action.newLanguage
      }

    case REHYDRATE:
      return {...state, ...action.payload.language}

    default:
      return state
  }
}

export const switchLanguage = (language) => {
  return dispatch => {
    dispatch({
      type: SWITCH_LANGUAGE,
      newLanguage: language
    })
  }
}
