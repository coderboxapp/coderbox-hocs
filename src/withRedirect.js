import { Component } from 'react'
import { createEagerFactory, setDisplayName, wrapDisplayName } from 'recompose'

const withRedirect = (path, predicate) => BaseComponent => {
  const factory = createEagerFactory(BaseComponent)

  class WithRedirect extends Component {
    componentWillReceiveProps (nextProps) {
      let { redirectTo } = nextProps

      if (predicate(nextProps)) {
        redirectTo(path)
      }
    }

    render () {
      return factory(this.props)
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withRedirect'))(WithRedirect)
}

export default withRedirect
