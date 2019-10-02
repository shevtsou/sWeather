import styled from 'styled-components'
import { Button, AutoComplete } from 'antd'

const SearchWrapper = styled.div`
  width: 50vh;
`

const StyledAutoComplete = styled(AutoComplete)`
  width: 100%;
`

const StyledButton = styled(Button)`
  margin-right: -0.75rem;
  background-color: blueviolet
`
export { StyledAutoComplete, SearchWrapper, StyledButton }
