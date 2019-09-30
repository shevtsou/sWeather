import React from 'react'
import { Route } from 'react-router-dom'
import pt from 'prop-types'

import Loader from '@/components/blocks/global/Loader'
import AccessDeniedPage from '@/components/pages/AccessDenied'

class SecuredRoute extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isAuth: false,
      isLoading: true,
    }
  }

  async componentDidMount () {
    const { strategy, ...rest } = this.props

    try {
      const strategyResult = await strategy(rest)

      this.setState({ isAuth: strategyResult })
    } catch (e) {
      this.setState({ isAuth: false })
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render () {
    const { isAuth, isLoading } = this.state
    const { component, ...rest } = this.props

    const TargetComponent = isAuth ? component : AccessDeniedPage
    const RouteComponent = isLoading ? Loader : TargetComponent

    return (
      <Route {...rest} component={RouteComponent} />
    )
  }
}

SecuredRoute.propTypes = {
  component: pt.oneOfType([
    Route.propTypes.component,
    pt.object,
  ]),
  strategy: pt.func.isRequired,
}

export default SecuredRoute
