import React from 'react'

import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Location = styled.div`
  font-size: ${props => props.theme.fontSizes.weryBig};
  font-family: ${props => props.theme.fontFamily};
`

const LocationWrapper = function (props) {
  const { city, country } = props.location
  return <Location>{[city, country].filter(c => c).join(', ')}</Location>
}
LocationWrapper.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
}

export default connect(state => ({ location: state.location }))(LocationWrapper)
