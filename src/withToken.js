import decode from 'jwt-decode'
import React, { createFactory } from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

const withToken = (key) => (BaseComponent) => {
  const factory = createFactory(BaseComponent)

  class WithToken extends React.Component {
    componentWillReceiveProps (nextProps) {
      let token = nextProps.token

      if (token) {
        if (typeof Storage !== 'undefined') {
          window.localStorage.setItem(`${key}-jwt`, token)
          window.localStorage.setItem(`${key}-user`, JSON.stringify(decode(token)))
        }
      }
    }

    render () {
      return factory(this.props)
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withToken'))(WithToken)
}

export default withToken
