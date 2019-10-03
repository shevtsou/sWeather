import styled from 'styled-components'
import { Button, AutoComplete } from 'antd'

const SearchForm = styled.form`
  width: 50vh;
  display: flex;
`

const StyledAutoComplete = styled(AutoComplete)`
  width: 100%;
`

const StyledButton = styled(Button)`
  margin-right: -0.75rem;
`
export { StyledAutoComplete, SearchForm, StyledButton }
