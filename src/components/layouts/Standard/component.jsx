import React from 'react'
import pt from 'prop-types'

import Header from '@/components/blocks/global/Header'
import Wrapper from '@/components/blocks/global/Wrapper'
import Main from '@/components/blocks/global/Main'
import Footer from '@/components/blocks/global/Footer'
import { loadDataFromStorage } from '../../../actions/storage'
import { connect } from 'react-redux'

class StandardLayout extends React.Component {
  componentDidMount() {
    this.props.loadDataFromStorage()
  }
  render(children) {
    return (
      <Wrapper>
        <Header />
        <Main>{this.props.children}</Main>
        <Footer />
      </Wrapper>
    )
  }
}

StandardLayout.propTypes = {
  children: pt.arrayOf(
    pt.oneOfType([pt.string.isRequired, pt.element.isRequired])
  )
}

export default connect(
  null,
  {
    loadDataFromStorage
  }
)(StandardLayout)
