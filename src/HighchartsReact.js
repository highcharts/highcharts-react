var React = require('react')
var createReactClass = require('create-react-class')

var HighchartsReact = createReactClass({
  componentDidMount: function () {
    var highcharts = this.props.highcharts
    var constructor = this.props.constructor
    var container = this.container
    var options = this.props.options
    // Create chart
    this.chart = highcharts[constructor](container, options)
  },

  // shouldComponentUpdate: function (nextProps, nextState) {},

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
