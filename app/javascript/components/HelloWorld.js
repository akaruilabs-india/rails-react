import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = ({ app: { name }, updateName }) => (
  <div>
    <h3>
      Hello, {name}!
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
)

HelloWorld.propTypes = {
  name: PropTypes.string,
  updateName: PropTypes.func.isRequired,
}

export default HelloWorld
