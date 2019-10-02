import React from 'react'
import 'antd/dist/antd.css'
import Header from './styles'
import SearchBar from '@/components/forms/Search-bar'
import { Button, PageHeader, Icon } from 'antd'

import { fromEventPattern } from 'rxjs'

export default () => (
  <Header>
    <div style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>sWeather</div>
    <SearchBar />
    <Button style={{ margin: '0 0.3rem 0 ' }} type="secondary" size="large">
      <Icon style={{ fontSize: '1.5rem' }} type="environment" />
    </Button>
    <Button type="secondary" size="large">
      <Icon style={{ fontSize: '1.5rem' }} type="setting" />
    </Button>
  </Header>
)
