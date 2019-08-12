import React from 'react'
import PropTypes from 'prop-types'

const Warning = ({ children }) => {
  return <h2 className="warning">{children}</h2>
}

Warning.displayName = 'Warning'

Warning.propTypes = {
  children: PropTypes.any
}

export default Warning
