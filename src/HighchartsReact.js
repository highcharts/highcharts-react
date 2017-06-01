var React = require('react')
var createReactClass = require('create-react-class')

var HighchartsReact = createReactClass({
  componentDidMount: function () {
    var p = this.props
    var highcharts = p.highcharts || window.Highcharts
    var constructorType = p.constructorType || 'chart'
    // Create chart
    this.chart = highcharts[constructorType](this.container, p.options)
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    var update = this.props.update
    // Update if not specified or set to true
    return (typeof update === 'undefined') || update
  },

  componentDidUpdate: function () {
    this.chart.update(this.props.options)
  },

  componentWillReceiveProps: function () {
    this.chart.update(this.props.options)
  },

  componentWillUnmount: function () {
    // Destroy chart
    this.chart.destroy()
  },

  render: function () {
    var self = this
    var containerProps = this.props.containerProps || {}

    // Add ref to div props
    containerProps.ref = function (container) { self.container = container }

    // Create container for our chart
    return React.createElement('div', containerProps)
  }
})

module.exports = HighchartsReact
