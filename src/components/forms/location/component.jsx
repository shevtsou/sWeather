import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Location = styled.div`
  font-size: ${props => props.theme.fontSizes.weryBig}
  font-family: ${props => props.theme.fontFamily}
  margin-top: ${props => props.theme.unit.sixteen}
`

const LocationWrapper = function(props) {
  return <Location>{props.location}</Location>
}
LocationWrapper.propTypes = {
  location: PropTypes.string
}

export default LocationWrapper
