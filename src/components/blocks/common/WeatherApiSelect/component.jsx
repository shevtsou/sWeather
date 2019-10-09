import React from 'react'

import {
  METAWEATHER_API,
  WEATHERBIT_API,
} from '../../../../constants/whether-api'
import { connect } from 'react-redux'
import { changeWeatherApi, getWeather } from '../../../../actions'
import { Select } from 'antd'
import PropTypes from 'prop-types'

const { Option } = Select

const WeatherApiSelect = function (props) {
  const { changeWeatherApi, weatherApi } = props
  return (
    <Select
      value={weatherApi}
      size="large"
      style={{ width: 230 }}
      onChange={api => {
        changeWeatherApi(api)
      }}
    >
      <Option value={METAWEATHER_API}>Meta Weather Api</Option>
      <Option value={WEATHERBIT_API}>Weather Bit Api</Option>
    </Select>
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
