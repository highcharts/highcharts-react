var React = require('react')
var createReactClass = require('create-react-class')

var HighchartsReact = createReactClass({
  componentDidMount: function () {
    var highcharts = this.props.highcharts || window.Highcharts
    var constructorType = this.props.constructorType || 'chart'
    var options = this.props.options
    var container = this.container
    // Create chart
    this.chart = highcharts[constructorType](container, options)
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
    // Create container for our chart
    return React.createElement('div', {
      ref: function (container) {
        self.container = container
      }
    })
  }
})

module.exports = HighchartsReact
