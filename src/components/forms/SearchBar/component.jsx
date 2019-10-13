import React from 'react'
import { StyledAutoComplete, StyledButton, SearchForm } from './styles'
import { Icon, Input } from 'antd'
import { connect } from 'react-redux'
import { getWeather } from '@/actions/weather'
import { changeLocation } from '@/actions'
import PropTypes from 'prop-types'

class Search extends React.Component {
  state = {
    searchTerm: '',
  }

  handleChange = value => {
    this.setState({ searchTerm: value })
  }

  render () {
    const { searchTerm } = this.state
    const { changeLocation } = this.props
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
                onClick={() => {
                  changeLocation(searchTerm)
                }}
              >
                <Icon type="search" />
              </StyledButton>
            } />
        </StyledAutoComplete>
      </SearchForm>
    )
  }
}
Search.propTypes = {
  changeLocation: PropTypes.func,
}
export default connect(
  state => ({
    location: state.location.location,
  }),
  { getWeather, changeLocation }
)(Search)
