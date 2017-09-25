export const ADD_NETWORK = 'social-connect/ADD_NETWORK'

const initialState = {
  socialNetworks: [
    { name: 'Google', icon: 'google', hoverClass: 'googleHover' },
    { name: 'Linkedin', icon: 'linkedin', hoverClass: 'linkedinHover' },
    { name: 'Xing', icon: 'xing', hoverClass: 'xingHover' },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NETWORK:
      return {
        ...state,
        socialNetworks: [...state.socialNetworks, action.newNetwork]
      }

    default:
      return state
  }
}

export const addNetwork = () => {
  return dispatch => {
    dispatch({
      type: ADD_NETWORK
    })
  }
}
