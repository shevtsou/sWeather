import React from 'react'
import 'antd/dist/antd.css'
import Header from './styles'
import SearchBar from '@/components/forms/SearchBar'
import LocationButton from '../../common/LocationButton'
import WeatherApiSelect from '../../common/WeatherApiSelect'
import styled from 'styled-components'

const Title = styled.div`
  
  margin-right: 0.5rem
  font-size: ${props => props.theme.fontSizes.big}
  font-family: ${props => props.theme.fontFamily}
  font-weight: ${props => props.theme.fontWeights.bold};
`
export default () => (
  <Header>
    <Title>sWeather</Title>
    <SearchBar />
    <LocationButton />
    <WeatherApiSelect />
  </Header>
)
