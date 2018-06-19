import { NAME_UPDATE } from '../constants/appConstants'

export const updateName = (text) => ({
  type: NAME_UPDATE,
  text,
})
