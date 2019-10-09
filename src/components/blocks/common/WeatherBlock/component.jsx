import Wrapper from './styles'

import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiRain, WiDaySunny, WiAlien } from 'react-icons/wi'
import styled from 'styled-components'

const CentralizedBlock = styled.div`
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
`

const Label = styled.div`
  display: flex;
  justify-content: center;
`
const BoldLabel = styled.div`
  font-weight: bold;
`

const TempretureIdicator = styled.div`
  font-size: 4rem;
  text-align: center;
`
const TempretureMeasure = styled.span`
  font-size: 2rem;
  vertical-align: text-top;
`
const WeatherCharacteristics = styled.div`
  font-size: ${props => props.theme.fontSizes.normal};
  display: flex;
  flex-flow: column;
  align-items: center;
`

function getIconByWeatherName (weather) {
  if (weather.toLowerCase().includes('cloud')) {
    return WiCloud
  } else if (weather.toLowerCase().includes('clear')) {
    return WiDaySunny
  } else if (
    weather.toLowerCase().includes('shower') ||
    weather.toLowerCase().includes('rain')
  ) {
    return WiRain
  } else {
    return WiAlien
  }
}

function WeatherBlock (props) {
  const WeatherIcon = getIconByWeatherName(props.weatherDescription)
  return (
    <Wrapper>
      <CentralizedBlock>
        <BoldLabel>{props.dayOfWeek}</BoldLabel>
        <Label>{props.date}</Label>
      </CentralizedBlock>

      <CentralizedBlock>
        <WeatherIcon size={100} />
        <Label>{props.weatherDescription.toLowerCase()} </Label>
      </CentralizedBlock>

      <TempretureIdicator>
        {Math.round(props.temperature)}
        <TempretureMeasure>°C</TempretureMeasure>
      </TempretureIdicator>

      <WeatherCharacteristics>
        <div>Precipitation: {Math.round(props.precipitation)}%</div>
        <div>Humidity: {Math.round(props.humidity)}%</div>
        <div>Wind: {Math.round(props.wind)}km/h</div>
      </WeatherCharacteristics>
    </Wrapper>
  )
}
WeatherBlock.propTypes = {
  date: PropTypes.string,
  dayOfWeek: PropTypes.string,
  weatherDescription: PropTypes.string,
  temperature: PropTypes.number,
  precipitation: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
}
export default WeatherBlock
