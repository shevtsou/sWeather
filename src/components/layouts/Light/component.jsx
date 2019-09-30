import React from 'react'
import pt from 'prop-types'

const LightLayout = ({ children }) => (
  <div>
    {children}
  </div>
)

LightLayout.propTypes = {
  children: pt.oneOfType([
    pt.string.isRequired,
    pt.element.isRequired,
  ]),
}

export default LightLayout
