import React from 'react'
import { setDisplayName, wrapDisplayName, createEagerFactory } from 'recompose'

export default (fn) => (BaseComponent) => {
  const factory = createEagerFactory(BaseComponent)

  class DidMount extends React.Component {
    componentDidMount () {
      if (fn) {
        fn(this.props)
      }
    }

    render () {
      return factory({
        ...this.props,
        ...this.state
      })
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'didMount'))(DidMount)
}
