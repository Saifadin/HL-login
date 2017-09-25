import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import socialConnect from './social-connect'
import language from './language'

export default combineReducers({
  routing: routerReducer,
  language,
  socialConnect
})
