import React from 'react'

import styled from 'styled-components'
import { connect } from 'react-redux'

const Location = styled.div`
  font-size: ${props => props.theme.fontSizes.weryBig};
  font-family: ${props => props.theme.fontFamily};
`

const LocationWrapper = function (props) {
  const { city, country } = props.location
  return (
    <Location>
      {
        [city, country].filter(c => c).join(', ')
      }
    </Location>
  )
}

export default connect(state => ({ location: state.location }))(LocationWrapper)
