import { Component } from 'react'
import { createEagerFactory, setDisplayName, wrapDisplayName } from 'recompose'

const withRedirect = (predicate, redirect) => BaseComponent => {
  const factory = createEagerFactory(BaseComponent)

  class WithRedirect extends Component {
    componentWillReceiveProps (nextProps) {
      if (predicate(nextProps)) {
        redirect()
      }
    }

    render () {
      return factory(this.props)
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withRedirect'))(WithRedirect)
}

export default withRedirect
