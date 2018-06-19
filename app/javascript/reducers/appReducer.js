import { NAME_UPDATE } from '../constants/appConstants'

const appReducer = (state = '', action) => {
  switch (action.type) {
    case NAME_UPDATE:
      return { ...state, name: action.text };
    default:
      return state;
  }
}

export default appReducer