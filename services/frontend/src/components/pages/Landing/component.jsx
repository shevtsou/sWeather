import React from 'react'

import StandardLayout from '@/components/layouts/Standard'
import WeatherList from '@/components/blocks/common/WeatherList'
import Location from '@/components/blocks/common/Location'

const LandingPage = () => (
  <StandardLayout>
    <Location />
    <WeatherList />
  </StandardLayout>
)

export default LandingPage
