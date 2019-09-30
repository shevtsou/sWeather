import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loader from '@/components/blocks/global/Loader'
import SecuredRoute from '@/components/wrappers/SecuredRoute'
import {
  successStrategyExample,
  failureStrategyExample,
} from '@/routerPermissions'

import { LANDING_PAGE_PATH } from '@/constants'

const LandingPage = React.lazy(() => import('@/components/pages/Landing'))
const NotFoundPage = React.lazy(() => import('@/components/pages/NotFound'))

export default () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route
          exact
          path={LANDING_PAGE_PATH}
          component={LandingPage} />

        <SecuredRoute
          path="/success"
          component={LandingPage}
          strategy={successStrategyExample} />

        <SecuredRoute
          path="/failure"
          component={LandingPage}
          strategy={failureStrategyExample} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </React.Suspense>
  </Router>
)
