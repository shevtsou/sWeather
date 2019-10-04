import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Location = styled.div`
  font-size: ${props => props.theme.fontSizes.weryBig}
  font-family: ${props => props.theme.fontFamily}
`

const LocationWrapper = function (props) {
  const { latitude, longtitude } = props.location

  return <Location>{latitude}/{longtitude}</Location>
}
LocationWrapper.propTypes = {
  location: PropTypes.string,
}

export default connect(state => ({ location: state.location }))(LocationWrapper)
