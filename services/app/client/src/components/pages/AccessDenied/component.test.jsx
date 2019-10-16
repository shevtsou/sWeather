import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import screenshotsTests from '@/e2e'

import AccessDenied from './component'

it('AccessDenied page has no visual regressions', async () => {
  render(
    <Router>
      <ThemeProviderWrapper>
        <AccessDenied />
      </ThemeProviderWrapper>
    </Router>
  )

  const tests = screenshotsTests()

  for (let i = 0; i < tests.length; i += 1) {
    const test = await tests[i]
    expect(test).toMatchImageSnapshot()
  }
})
