import React from 'react'
import {
  StyledAutoComplete,
  StyledButton,
  SearchForm,
} from './styles'
import { Icon, Input, AutoComplete } from 'antd'
import { connect } from 'http2'
import { getWeather } from '.'
const { Option } = AutoComplete

// const locationNames = [
//   'Belarus Vitebsk',
//   'Belarus Minsk',
//   'Belarus Gomel',
//   'Belarus Mogilev',
//   'USA New York',
//   'USA London',
//   'Germany Berlin'
// ]

// const mockDataSource = locationNames.map((locationName, index) => {
//   return {
//     id: index,
//     country: locationName.split(' ')[0],
//     city: locationName.split(' ')[1]
//   }
// })

// function onSelect(value) {
//   console.log('onSelect', value)
// }

// function renderOption(item) {
//   return (
//     <Option key={item.id} text={item.country + ', ' + item.city}>
//       <div className="global-search-item">
//         <span className="global-search-item-desc">
//           {item.country}, {item.city}
//         </span>
//       </div>
//     </Option>
//   )
// }

class Search extends React.Component {
  state = {
    searchTerm: '',
  }

  handleChange = value => {
    // this.setState({
    //   dataSource: value
    //     ? mockDataSource.filter(item =>
    //         item.city.toLowerCase().includes(value.toLowerCase())
    //       )
    //     : []
    // })
    this.setState({ searchTerm: value })
  }

  handleSearch = e => {
    const { searchTerm } = this.state
    this.props.getWeather(searchTerm)
  }

  render() {
    const { searchTerm } = this.state
    return (
      <SearchForm onSubmit={this.handleSearch}>
        <StyledAutoComplete
          size="large"
          value={searchTerm}
          onSearch={this.handleChange}
          placeholder="Enter location..."
          optionLabelProp="text"
        >
          <Input
            suffix={
              <StyledButton
                size="large"
                type="primary"
                onClick={this.handleSearch}
              >
                <Icon type="search" />
              </StyledButton>
            }
          />
        </StyledAutoComplete>
      </SearchForm>
    )
  }
}
export default connect(null, { getWeather })(Search)
