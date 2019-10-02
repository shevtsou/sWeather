import React from 'react'

import StandardLayout from '@/components/layouts/Standard'
import WeatherList from '@/components/forms/weather-list'
import Location from '@/components/forms/location'

const LandingPage = () => (
  <StandardLayout>
    <Location location="Vitebsk" />
    <WeatherList />
  </StandardLayout>
)

export default LandingPage
