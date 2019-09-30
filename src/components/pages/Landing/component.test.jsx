import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import screenshotsTests from '@/e2e'

import Landing from './component'

it('Landing page has no visual regressions', async () => {
  render(
    <ThemeProviderWrapper>
      <Landing />
    </ThemeProviderWrapper>
  )

  const tests = screenshotsTests()

  for (let i = 0; i < tests.length; i += 1) {
    const test = await tests[i]
    expect(test).toMatchImageSnapshot()
  }
})
