# Highcharts React
Official minimal Highcharts wrapper for React

## Getting Started

### Installing

Get package from github with npm or yarn

```
npm install highcharts blacklabel/highcharts-react
```

Then import it with React and Highcharts in your project

```
var React = require('react')
var Highcharts = require('highcharts')
var HighchartsReact = require('highcharts-react')
```

Then you can create your custom chart components

```
var StockChart = function ({ chartOptions }) {
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

module.exports = StockChart
```

## Examples

You can look at examples in demo folder.

## Running the tests

```
npm run test
```

### And coding style tests

```
npm run lint
```

## Built using

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Authors

* **Sławomir Stypuła** - *Initial work* - [stpoa](https://github.com/stpoa)

See also the list of [contributors](https://github.com/blacklabel/highcharts-react/contributors) who participated in this project.
