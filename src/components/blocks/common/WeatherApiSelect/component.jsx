import React from 'react'

import {
  METAWEATHER_API,
  WEATHERBIT_API,
} from '@/constants/weather-api'
import { connect } from 'react-redux'
import { changeWeatherApi, getWeather } from '../../../../actions'
import { Select } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { Option } = Select

const ResponsiveSelect = styled(Select)`
  @media only screen and (max-width: 500px) {
    &.ant-select-lg {
      display: none;
    }
  }
  .ant-select-selection-selected-value {
    padding-right: 5px;
  }
`
const WeatherApiSelect = function (props) {
  const { changeWeatherApi, weatherApi } = props
  return (
    <ResponsiveSelect
      value={weatherApi}
      size="large"
      style={{ width: 160, margin: '0.2rem' }}
      onChange={changeWeatherApi}
    >
      <Option value={METAWEATHER_API}>Meta Weather Api</Option>
      <Option value={WEATHERBIT_API}>Weather Bit Api</Option>
    </ResponsiveSelect>
  )
}
WeatherApiSelect.propTypes = {
  changeWeatherApi: PropTypes.func,
  weatherApi: PropTypes.string,
}

export default connect(
  state => ({
    weatherApi: state.weather.weatherApi,
    location: state.location,
  }),
  { changeWeatherApi, getWeather }
)(WeatherApiSelect)
