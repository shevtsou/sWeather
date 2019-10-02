import React from 'react'
import 'antd/dist/antd.css'
import Header from './styles'
import SearchBar from '@/components/forms/search-bar'
import { Button, Icon } from 'antd'
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
    <Button style={{ margin: '0 0.3rem 0 ' }} type="secondary" size="large">
      <Icon style={{ fontSize: '1.5rem' }} type="environment" />
    </Button>
    <Button type="secondary" size="large">
      <Icon style={{ fontSize: '1.5rem' }} type="setting" />
    </Button>
  </Header>
)
