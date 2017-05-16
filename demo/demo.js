var React = require('react')
var render = require('react-dom').render

// Import our demo components
var Stock = require('./Stock.jsx')

// Render app with demo chart
var App = function () {
  return React.createElement(
    'div',
    null,
    React.createElement(Stock, null)
  )
}

render(React.createElement(App, null), document.getElementById('root'))
