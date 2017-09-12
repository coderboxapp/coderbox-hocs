import decode from 'jwt-decode'
import { Component } from 'react'
import { createEagerFactory, setDisplayName, wrapDisplayName } from 'recompose'

const withToken = (key) => (BaseComponent) => {
  const factory = createEagerFactory(BaseComponent)

  class WithToken extends Component {
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
