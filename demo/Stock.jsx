var React = require('react')
var HighchartsReact = require('../')
var Highcharts = require('highcharts/highstock')

var chartOptions = {
  series: [{
    data: [1, 2, 3]
  }]
}

var Stock = function () {
  return React.createElement(
    'div',
    null,
    React.createElement(HighchartsReact, {
      constructor: 'stockChart',
      highcharts: Highcharts,
      options: chartOptions
    })
  )
}

module.exports = Stock
