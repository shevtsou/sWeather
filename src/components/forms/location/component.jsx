import React from 'react'

import styled from 'styled-components'
import { connect } from 'react-redux'

const Location = styled.div`
  font-size: ${props => props.theme.fontSizes.weryBig};
  font-family: ${props => props.theme.fontFamily};
`

const LocationWrapper = function (props) {
  const { city, country } = props.location
  if (!city && !country) {
    return <Location>No location selected</Location>
  } else {
    return <Location>{city}, {country}</Location>
  }
}

export default connect(state => ({ location: state.location.location }))(LocationWrapper)
