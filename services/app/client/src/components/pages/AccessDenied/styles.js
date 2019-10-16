import styled from 'styled-components'

export default styled.div`
  height: 128px;
  background-color: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.backgroundDark};
  font-size: ${props => props.theme.fontSizes.weryBig};
  padding-left: ${props => props.theme.unit.quadriple};
  padding-right: ${props => props.theme.unit.quadriple};
  padding-top: ${props => props.theme.unit.double};
  padding-bottom: ${props => props.theme.unit.double};

  a {
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.colors.backgroundDark};
    margin-top: ${props => props.theme.unit.quadriple};
    border: solid 1px ${props => props.theme.colors.backgroundDark};
    padding: ${props => props.theme.unit.half};
  }
`
