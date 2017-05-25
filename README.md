# Highcharts React
Official minimal Highcharts wrapper for React

## Getting Started

### Installing

Get package from github with npm or yarn

```
npm install highcharts blacklabel/highcharts-react
```

Import it with React in your project

```
import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react'
```

Then you can create your custom chart components

```
const StockChart = ({ options }) => <HighchartsReact
  highcharts={Highcharts}
  constructorType={'chart'}
  options={options}
/>

export default StockChart
```

You can render your custom chart component like below:

```
import React from 'react'
import { render } from 'react-dom'
import StockChart from './components/Stock.jsx'

const App = () => <div>
  <StockChart options={stockOptions} highcharts={Highcharts} />
</div>

render(<App />, document.getElementById('root'))
```

## Examples

You can look at examples in demo folder. Bundle these with:

```
npm run bundle-demo
```

And open deomo/index.html

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
