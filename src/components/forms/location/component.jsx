import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Location = styled.div`
  font-size: ${props => props.theme.fontSizes.weryBig};
  font-family: ${props => props.theme.fontFamily};
`

const LocationWrapper = function (props) {
  const { latitude, longitude } = props.location

  return <Location>{latitude}/{longitude}</Location>
}
LocationWrapper.propTypes = {
  location: PropTypes.string,
}

export default connect(state => ({ location: state.location.location }))(LocationWrapper)
