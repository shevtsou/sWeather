import React from 'react'
import { SearchWrapper, StyledAutoComplete, StyledButton } from './styles'
import { Icon, Input, AutoComplete } from 'antd'

const { Option } = AutoComplete

const locationNames = [
  'Belarus Vitebsk',
  'Belarus Minsk',
  'Belarus Gomel',
  'Belarus Mogilev',
  'USA New York',
  'USA London',
  'Germany Berlin',
]

const mockDataSource = locationNames.map((locationName, index) => {
  return {
    id: index,
    country: locationName.split(' ')[0],
    city: locationName.split(' ')[1],
  }
})

function onSelect (value) {
  console.log('onSelect', value)
}

function renderOption (item) {
  return (
    <Option key={item.id} text={item.country + ', ' + item.city}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          {item.country}, {item.city}
        </span>
      </div>
    </Option>
  )
}

class Search extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = value => {
    this.setState({
      dataSource: value
        ? mockDataSource.filter(item => item.city.toLowerCase().includes(value.toLowerCase()))
        : [],
    })
  }

  render () {
    const { dataSource } = this.state
    return (
      <SearchWrapper>
        <StyledAutoComplete
          size="large"
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="Enter location..."
          optionLabelProp="text"
        >
          <Input
            suffix={
              <StyledButton size="large" type="primary">
                <Icon type="search" />
              </StyledButton>
            } />
        </StyledAutoComplete>
      </SearchWrapper>
    )
  }
}
export default Search
