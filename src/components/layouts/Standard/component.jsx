import React from 'react'
import pt from 'prop-types'

import Header from '@/components/blocks/global/Header'
import Wrapper from '@/components/blocks/global/Wrapper'
import Main from '@/components/blocks/global/Main'
import Footer from '@/components/blocks/global/Footer'
import { getWeather } from '../../../actions/weather'

function test () {
  getWeather('test')
}
const StandardLayout = ({ children }) => (
  <Wrapper>
    {test}
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

StandardLayout.propTypes = {
  children: pt.arrayOf(
    pt.oneOfType([pt.string.isRequired, pt.element.isRequired])
  )
}

export default StandardLayout
