import Wrapper from './styles'

import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiRain, WiFog, WiDaySunny } from 'react-icons/wi'
import { CLOUDY, SUNNY, RAINY, FOG } from '../../../constants/weather'
import styled from 'styled-components'

function getIconByWeatherName (weather) {
  switch (weather) {
    case CLOUDY:
      return WiCloud
    case SUNNY:
      return WiDaySunny
    case RAINY:
      return WiRain
    case FOG:
      return WiFog
    default:
  }
}

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
        <Label>
          {props.weatherDescription.toLowerCase()}{' '}
        </Label>
      </CentralizedBlock>

      <TempretureIdicator>
        {props.temperature}
        <TempretureMeasure>°C</TempretureMeasure>
      </TempretureIdicator>

      <WeatherCharacteristics>
        <div>Precipitation: {props.precipitation}%</div>
        <div>Humidity: {props.humidity}%</div>
        <div>Wind: {props.wind}km/h</div>
      </WeatherCharacteristics>
    </Wrapper>
  )
}
WeatherBlock.propTypes = {
  date: PropTypes.string,
  dayOfWeek: PropTypes.string,
  weatherDescription: PropTypes.string,
  temperature: PropTypes.string,
  precipitation: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
}
export default WeatherBlock
