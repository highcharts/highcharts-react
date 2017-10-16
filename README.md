# Highcharts React
Official minimal Highcharts wrapper for React

## Getting Started

### Installing

Get package from github with npm or yarn

```
npm install highcharts/highcharts-react highcharts react react-dom
```

### Using

#### Basic usage example

Import it with React in your project and render a basic chart

```
import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react'

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

#### Usage example with custom chart component

Create custom component `./components/MyStockChart.jsx`:

```
import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react'

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

```
import React from 'react'
import { render } from 'react-dom'
import MyStockChart from './components/MyStockChart.jsx'

const App = () => <div>
  <MyStockChart />
</div>

render(<App />, document.getElementById('root'))
```

## Get repository

Clone github repository and install dependencies

```
git clone https://github.com/highcharts/highcharts-react
cd highcharts-react
npm install
```

Examples and tests require Highcharts library, don't forget to:

```
npm install highcharts
```

For Highstock's indicators it's required to install [highstock-release](https://www.npmjs.com/package/highstock-release)

```
npm install highstock-release
```

## Examples

Look at examples in demo folder.

Bundle these with:

```
npm run build-demo
```

Demo is located under demo/index.html

## Tests

### Wrapper tests

```
npm run test
```

### Coding style tests

```
npm run lint
```

## Built using

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
