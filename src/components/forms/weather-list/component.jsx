import React from 'react'
import WeatherBlock from '@/components/forms/weather-block'
import { Divider, Spin, Icon } from 'antd'
import { CLOUDY, SUNNY, RAINY, FOG } from '../../../constants/weather';
import { connect } from 'react-redux'
import styled from 'styled-components'
import Loader from '@/components/blocks/global/Loader'

const StyledLoader = styled(Loader)`
  position: static;
  display: flex;
  align-items: center;
  height: 20vh;
  justify-content: center;
`

class WeatherList extends React.Component {

  render () {
    const { weather, isFetching } = this.props.weather
    if (isFetching) {
      return <StyledLoader />
    } else {
      return (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
          }}
        >
          {weather.map(day => (
            <React.Fragment key={day.date}>
              <WeatherBlock {...day} />
              <Divider />
            </React.Fragment>
          ))}
        </div>
      )
    }

  }
}

export default connect(state => ({ 
  weather: state.weather
 }))(WeatherList)
