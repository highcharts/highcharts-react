# Highcharts React
Official minimal [Highcharts](https://www.highcharts.com/) wrapper for React

## Getting Started

### Installing

Get package from github with npm or yarn

```bash
npm install highcharts-react-official highcharts react react-dom
```

### Using

#### Basic usage example

Import into your React project and render a:

##### Highcharts chart

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

##### Highstock chart

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

##### Highmaps chart

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
// the same allpies to any other Highcharts module

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

### Options explained

```jsx
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={'mapChart'}
    options={options}
    update={update}
  />
```

#### highcharts

Used to pass the Highcharts instance after modules are initialized.
If not set the component will try to get the Highcharts from window.

#### constructorType

Defaults to `'chart'`. Other official constructors are:

- `'stockChart'` for Highstock charts
- `'mapChart'` for Highmaps charts

If you have added a module or a plugin that adds new contructor then you can use it and set using this property.

#### options

Options that will be used for a chart. Please refer to the Highcharts [API documentation](https://api.highcharts.com/highcharts/).

#### update

Update will run when checking in `shouldComponentUpdate` if this property is not specified or set to `true`.


### Usage example with custom chart component

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

Clone github repository and install dependencies

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

Look at examples in demo folder.

Bundle these with:

```bash
npm run build-demo
```

Demo is located under demo/index.html

## Tests

### Wrapper tests

```bash
npm run test
```

## FAQ

#### Where to look for help?

[Technical support at Highcharts](https://www.highcharts.com/support) will help you with Highcharts and the wrapper.

If you have a bug to report or an enhancement suggestion please you [issues](https://github.com/highcharts/highcharts-react/issues) in this repository.

#### Why highcharts-react-official, and not highcharts-react, is used?

The NPM package is registered as `highcharts-react-official` because `highcharts-react` was already taken.

