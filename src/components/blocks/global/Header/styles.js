import styled from 'styled-components'

export default styled.header`
  height: 5vh;
  width: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  font-size: ${props => props.theme.fontSizes.weryBig};
  padding-left: ${props => props.theme.unit.quadriple};
  padding-right: ${props => props.theme.unit.quadriple};
  padding-top: ${props => props.theme.unit.double};
  padding-bottom: ${props => props.theme.unit.double};
`
