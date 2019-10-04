import React from 'react'

import { connect } from 'react-redux'
import { getLocation } from '../../../actions'
import { Button, Icon } from 'antd'

const LocationButton = function (props) {
  const { getLocation } = props
  return (
    <Button
      style={{ margin: '0 0.3rem 0 ' }}
      type="secondary"
      size="large"
      onClick={() => getLocation()}
    >
      <Icon style={{ fontSize: '1.5rem' }} type="environment" />
    </Button>
  )
}

export default connect(
  null,
  { getLocation }
)(LocationButton)
