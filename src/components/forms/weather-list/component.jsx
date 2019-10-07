import React from 'react'
import WeatherBlock from '@/components/forms/weather-block'
import { Divider, Spin, Icon } from 'antd'
import { CLOUDY, SUNNY, RAINY, FOG } from '../../../constants/weather';
import { connect } from 'react-redux'

class WeatherList extends React.Component {

  render () {
    const { weather, isFetching } = this.props.weather
    if (isFetching) {
      const loadingIcon = <Icon type="loading" style={{ fontSize: 80 }} spin />
      const spin = <Spin style={{ height: '30vh', display: 'flex', alignItems: 'center' }} indicator={loadingIcon} />
    
      return spin
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
