import { createStore } from 'redux'
import reducer from '../reducers/index'

const configureStore = (props) => (
  createStore(reducer, props)
)

export default configureStore
