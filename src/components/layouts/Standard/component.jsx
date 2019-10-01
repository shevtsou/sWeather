import React from 'react'
import pt from 'prop-types'

import Header from '@/components/blocks/global/Header'
import Wrapper from '@/components/blocks/global/Wrapper'
import Main from '@/components/blocks/global/Main'
import Footer from '@/components/blocks/global/Footer'

const StandardLayout = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

StandardLayout.propTypes = {
  children: pt.oneOfType([
    pt.string.isRequired,
    pt.element.isRequired,
  ]),
}

export default StandardLayout
