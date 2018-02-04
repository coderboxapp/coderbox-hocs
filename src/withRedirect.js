import React, { createFactory } from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

const withRedirect = (predicate, redirect) => BaseComponent => {
  const factory = createFactory(BaseComponent)

  class WithRedirect extends React.Component {
    componentWillReceiveProps (nextProps) {
      if (predicate(nextProps)) {
        redirect(nextProps)
      }
    }

    render () {
      return factory(this.props)
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withRedirect'))(WithRedirect)
}

export default withRedirect
