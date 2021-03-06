const ReactGA = require('react-ga')
ReactGA.initialize('UA-130692445-2')

// There's also a gatsby-plugin for google analytics that could be used.
// Find instructions for setting it up in the official Gatsby docs.
// https://www.gatsbyjs.org/docs/adding-analytics/#adding-analytics

exports.onRouteUpdate = (state, page, pages) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.pageview(state.location.pathname)
  }
}

const getPolyfills = () => {
  if (!('IntersectionObserver' in window)) {
    require('intersection-observer')
  }
}

exports.onClientEntry = () => {
  getPolyfills()
}
