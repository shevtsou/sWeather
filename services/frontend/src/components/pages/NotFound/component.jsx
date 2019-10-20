import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

import LightLayout from '@/components/layouts/Light'

import { LANDING_PAGE_PATH } from '@/constants'

import Wrapper from './styles'

const NotFound = () => (
  <LightLayout>
    <Wrapper>
      Requested page is not found
      <br />
      <Link to={LANDING_PAGE_PATH}>Return Home</Link>
    </Wrapper>
  </LightLayout>
)

export default NotFound
