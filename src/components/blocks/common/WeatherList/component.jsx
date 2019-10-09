import React from 'react'
import WeatherBlock from '@/components/blocks/common/WeatherBlock'
import { Divider } from 'antd'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Loader from '@/components/blocks/global/Loader'
import PropTypes from 'prop-types'

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

WeatherList.propTypes = {
  weather: PropTypes.shape({
    weather: PropTypes.array,
    isFetching: PropTypes.bool,
  }),
}

export default connect(state => ({
  weather: state.weather,
}))(WeatherList)
