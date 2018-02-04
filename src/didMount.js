import React, { createFactory } from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

export default (fn) => (BaseComponent) => {
  const factory = createFactory(BaseComponent)

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
