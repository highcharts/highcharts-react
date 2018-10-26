# Highcharts React
Official minimal [Highcharts](https://www.highcharts.com/) wrapper for React.

## Table of Contents
1. [Getting started](#getting-started)
    1. [General prerequisites](#general-prerequisites)
    2. [Installing](#installing)
    3. [Using](#using)
        1. [Basic usage example](#basic-usage-example)
        2. [Highcharts chart](#highcharts-chart)
        3. [Highstock chart](#highstock-chart)
        4. [Highmaps chart](#highmaps-chart)
2. [Options details](#options-details)
    1. [options](#options)
    2. [highcharts](#highcharts)
    3. [constructorType](#constructorType)
    4. [allowChartUpdate](#allowChartUpdate)
    5. [updateArgs](#updateArgs)
    6. [callback](#callback)
3. [Example with custom chart component](#example-with-custom-chart-component)
4. [Get repository](#get-repository)
5. [Examples](#examples)
6. [Tests](#tests)
7. [FAQ](#faq)

## Getting Started

### General prerequisites

Make sure you have **node**, **NPM** and **React** up to date.
Tested and required versions:

* node 8.11.3+
* npm 6.4.1+
* React 16.4+

### Installing

Get package from NPM in your React app:

```bash
npm install highcharts-react-official
```

### Using

#### Basic usage example

Import into your React project and render a chart:

#### Highcharts chart

```jsx
import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const App = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>

render(<App />, document.getElementById('root'))
```

#### Highstock chart

```jsx
import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My stock chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const App = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={'stockChart'}
    options={options}
  />
</div>

render(<App />, document.getElementById('root'))
```

#### Highmaps chart

```jsx
import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HC_map from 'highcharts/modules/map'
import HighchartsReact from 'highcharts-react-official'

// init the module
HC_map(Highcharts)

// instead of import + init you could use require as:
// require('highcharts/modules/map')(Highcharts)
// the same applies to any other Highcharts module

const options = {
  title: {
    text: 'My map chart'
  },
  series: [{
    // any meaningful map data is much larger,
    // but it should go in here
    data: [1, 2, 3]
  }]
}

const App = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={'mapChart'}
    options={options}
  />
</div>

render(<App />, document.getElementById('root'))
```

## Options details

Available options:

```jsx
  <HighchartsReact
    options={options}
    highcharts={Highcharts}
    constructorType={'mapChart'}
    allowChartUpdate={update}
    updateArgs={[true, true, true]}
    callback={this.chartCallback}
  />
```

### options

Highcharts chart configuration object. Please refer to the Highcharts [API documentation](https://api.highcharts.com/highcharts/). This option is required.

### highcharts

Used to pass the Highcharts instance after modules are initialized.
If not set the component will try to get the Highcharts from window.

### constructorType

String for [constructor method](https://www.highcharts.com/docs/getting-started/your-first-chart), defaults to `'chart'`. Other official constructors are:

- `'stockChart'` for Highstock charts
- `'mapChart'` for Highmaps charts

If you have added a module or a plugin that adds new constructor then you can use it and set using this property.

### allowChartUpdate

This wrapper uses `chart.update()` method to apply new options to the chart when changing the parent component.
Option `allowChartUpdate` allow to turn off the updating. This options is optional, defaults to `true`.

### updateArgs

Array of `update()`'s function optional arguments. Parameters should be defined in the same order like in native Highcharts function: `[redraw, oneToOne, animation]`, in this wrapper defaults to `[true, true, true]`. [Here](https://api.highcharts.com/class-reference/Highcharts.Chart#update) is a more specific description of the parameters. This option is optional.

### callback

A callback function for the created chart. First argument for the function will hold the created `chart`. Default `this` in the function points to the `chart`. This option is optional.

## Example with custom chart component

Create custom component `./components/MyStockChart.jsx`:

```jsx
import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My stock chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const MyStockChart = () => <HighchartsReact
  highcharts={Highcharts}
  constructorType={'stockChart'}
  options={options}
/>

export default MyStockChart
```

Render your custom chart component like below:

```jsx
import React from 'react'
import { render } from 'react-dom'
import MyStockChart from './components/MyStockChart.jsx'

const App = () => <div>
  <MyStockChart />
</div>

render(<App />, document.getElementById('root'))
```

## Get repository

Clone github repository and install dependencies:

```bash
git clone https://github.com/highcharts/highcharts-react
cd highcharts-react
npm install
```

Examples and tests require Highcharts library, don't forget to:

```bash
npm install highcharts
```

## Examples

There are several interesting examples in the demo folder that use all available constructors and a few modules.

Bundle these with:

```bash
npm run build-demo
```

Demo is located under demo/index.html

## Tests

This wrapper contains tests for: testing environment, chart rendering and passing down container props.
To run tests, type:

```bash
npm run test
```

## FAQ

### Where to look for help?

[Technical support](https://www.highcharts.com/support) will help you with Highcharts and the wrapper.

If you have a bug to report or an enhancement suggestion please submit [Issues](https://github.com/highcharts/highcharts-react/issues) in this repository.

### Why highcharts-react-official, and not highcharts-react, is used?

The NPM package is registered as `highcharts-react-official` because `highcharts-react` was already taken.
