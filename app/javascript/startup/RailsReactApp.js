import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '../store/store'
import Routes from './Routes'

const RailsReactApp = (props) => (
  <Provider store={configureStore(props)}>
    <Routes />
  </Provider>
)

export default RailsReactApp
