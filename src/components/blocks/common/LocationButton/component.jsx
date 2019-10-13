import React from 'react'

import { connect } from 'react-redux'
import { getLocation, getWeather } from '../../../../actions'
import { Button, Icon } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ResponsiveButton = styled(Button)`
  @media only screen and (max-width: 400px) {
    &.ant-btn-lg {
      display: none;
    }
  }
`

const LocationButton = function (props) {
  const { getLocation } = props
  return (
    <ResponsiveButton
      style={{ margin: '0 0.3rem 0 ' }}
      type="secondary"
      size="large"
      onClick={getLocation}
    >
      <Icon style={{ fontSize: '1.5rem' }} type="environment" />
    </ResponsiveButton>
  )
}
LocationButton.propTypes = {
  getLocation: PropTypes.func,
}
export default connect(
  state => ({ location: state.location.location }),
  { getLocation, getWeather }
)(LocationButton)
