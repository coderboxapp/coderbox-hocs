import { compose, withState, withHandlers, mapProps } from 'recompose'

export default compose(
    withState('index', 'setIndex', 0),
    withHandlers({
      next: ({ setIndex, children }) => () => setIndex(n => (n + 1) % children.length),
      prev: ({ setIndex, children }) => () => setIndex(n => n - 1 < 0 ? children.length - 1 : n - 1)
    }),
    mapProps(props => {
      let { index, next, prev, setIndex, ...rest } = props
      return {
        ...rest,
        stack: {
          index: index,
          next: next,
          prev: prev,
          setIndex: setIndex
        }
      }
    })
  )
