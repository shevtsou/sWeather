import React from 'react'
import 'antd/dist/antd.css'
import Header from './styles'
import SearchBar from '@/components/forms/SearchBar'
import LocationButton from '@/components/blocks/common/LocationButton'
import WeatherApiSelect from '@/components/blocks/common/WeatherApiSelect'

export default () => (
  <Header>
    <LocationButton />
    <SearchBar />
    <WeatherApiSelect />
  </Header>
)
