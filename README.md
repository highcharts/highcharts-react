# Highcharts React
Official minimal [Highcharts](https://www.highcharts.com/) wrapper for React.

## Table of Contents
1. [Getting started](#getting-started)
    1. [General prerequisites](#general-prerequisites)
    2. [Installing](#installing)
    3. [Using](#using)
        1. [Basic usage example](#basic-usage-example)
        2. [Highcharts with NextJS](#highcharts-with-nextjs)
        3. [Highcharts with TypeScript](#highcharts-with-typescript)
        4. [Optimal way to update](#optimal-way-to-update)
2. [Options details](#options-details)
3. [Example with custom chart component](#example-with-custom-chart-component)
4. [Get repository](#get-repository)
5. [Examples](#examples)
6. [Tests](#tests)
7. [Changelog](#changelog)
8. [FAQ](#faq)
    1. [Where to look for help?](#where-to-look-for-help)
    2. [Why highcharts-react-official and not highcharts-react is used?](#why-highcharts-react-official-and-not-highcharts-react-is-used)
    3. [How to get a chart instance?](#how-to-get-a-chart-instance)
    4. [How to add a module?](#how-to-add-a-module)
    5. [How to add React component to a chart's element?](#how-to-add-react-component-to-a-charts-element)
    6. [Why Highcharts mutates my data?](#why-highcharts-mutates-my-data)

## Getting Started

### General prerequisites

Make sure you have **node**, **NPM** and **React** up to date.
Tested and required versions:

* `node` 8.11.3+
* `npm` 6.4.1+ or similar package manager

This wrapper also requires highcharts and react packages with the following versions installed in your project:

For version **2.x.x** :

* `react` 16.4+
* `highcharts` 5.0.0+

For version **3.x.x** :

* `react` 16.8+
* `highcharts` 6.0.0+

### Installing

Get the package from NPM in your React app:

```bash
npm install highcharts-react-official
```

If Highcharts is not already installed, get the package with Highcharts:

```bash
npm install highcharts highcharts-react-official
```

### Using

#### Basic usage example

Import into your React project and render a chart:

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

### Highcharts with TypeScript

Live example: https://stackblitz.com/edit/react-starter-typescript-cfcznt

```tsx
import React, { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// The wrapper exports only a default component that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props) and
// RefObject interface (HighchartsReact.RefObject). All other interfaces
// like Options come from the Highcharts module itself.

const options: Highcharts.Options = {
    title: {
        text: 'My chart'
    },
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }]
};

const App = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};
// Render your App component into the #root element of the document.
ReactDOM.render(<App />, document.getElementById('root'));
```

Since version 3.2.1 it is also possible to import types for `props` and `ref` independently:

```tsx
import HighchartsReact, { HighchartsReactRefObject, HighchartsReactProps } from 'highcharts-react-official';
```

### Highcharts with NextJS

Next.js executes code twice - on server-side and then client-side. First run is done in an environment that lacks `window` and causes Highcharts to be loaded, but not initialized. Easy fix is to place all modules inits in a `if` checking if Highcharts is an object or a function. It should be an object for modules initialization to work without any errors, so code like below is an easy fix:

```jsx
import React from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

...
```

This is a know issue with NextJS and is covered here: https://github.com/vercel/next.js/issues/5354

### Optimal way to update

A good practice is to keep all chart options in the state. When `setState` is called, the options are overwritten and only the new ones are passed to the `chart.update` method.

**Live example:** https://stackblitz.com/edit/react-hketvd?file=index.js

**Optimal way to update with React Hooks:** https://stackblitz.com/edit/react-nwseym?file=index.js

```jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        xAxis: {
          categories: ['A', 'B', 'C'],
        },
        series: [
          { data: [1, 2, 3] }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this)
              }
            }
          }
        }
      },
      hoverData: null
    };
  }

  setHoverData = (e) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }

  updateSeries = () => {
    // The chart is updated only with new options.
    this.setState({
      chartOptions: {
        series: [
          { data: [Math.random() * 5, 2, 1]}
        ]
      }
    });
  }

  render() {
    const { chartOptions, hoverData } = this.state;

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      <h3>Hovering over {hoverData}</h3>
      <button onClick={this.updateSeries.bind(this)}>Update Series</button>
      </div>
    )
  }
}

render(<LineChart />, document.getElementById('root'));
```

## Options details

Available options with example values:

```jsx
  <HighchartsReact
    options = { this.state.chartOptions }
    highcharts = { Highcharts }
    constructorType = { 'mapChart' }
    allowChartUpdate = { true }
    immutable = { false }
    updateArgs = { [true, true, true] }
    containerProps = {{ className: 'chartContainer' }}
    callback = { this.chartCallback }
  />
```

| Parameter | Type | Required | Defaults | Description |
| --------- | :----: | :--------: | :--------: | ----------- |
| `options` | Object | yes | - | Highcharts chart configuration object. Please refer to the Highcharts [API documentation](https://api.highcharts.com/highcharts/). |
| `highcharts` | Object | yes | - | Used to pass the Highcharts instance after modules are initialized. If not set the component will try to get the Highcharts from window. |
| `constructorType` | String | no | `'chart'` | String for [constructor method](https://www.highcharts.com/docs/getting-started/your-first-chart). Official constructors: <br>- `'chart'` for Highcharts charts <br>- `'stockChart'` for Highstock charts <br>- `'mapChart'` for Highmaps charts <br>- `'ganttChart'` for Gantt charts|
| `allowChartUpdate` | 	Boolean | no | `true` | This wrapper uses `chart.update()` method to apply new options to the chart when changing the parent component. This option allow to turn off the updating. |
| `immutable` | Boolean | no | `false` | Reinitialises the chart on prop update (as oppose to `chart.update()`) - useful in some cases but slower than a regular update.|
| `updateArgs` | Array | no | `[true, true, true]` | Array of `update()`'s function optional arguments. Parameters should be defined in the same order like in native Highcharts function: `[redraw, oneToOne, animation]`. [Here](https://api.highcharts.com/class-reference/Highcharts.Chart#update) is a more specific description of the parameters.|
| `containerProps` | Object | no | - | The props object passed to the chart container in `React.createElement` method. Useful for adding styles or class.|
| `callback` | Function | no | - | A callback function for the created chart. First argument for the function will hold the created `chart`. Default `this` in the function points to the `chart`. This option is optional. |


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

There are several interesting examples in the demo folder that use all available constructors and several modules.

Bundle these with:

```bash
npm run build-demo
```

Demo is located under demo/index.html

Live example: https://stackblitz.com/edit/react-4ded5d?file=index.js

## Tests

This wrapper contains tests for: testing environment, chart rendering and passing down container props.
To run tests, type:

```bash
npm run test
```

## Changelog
The changelog is available [here](https://github.com/highcharts/highcharts-react/blob/master/CHANGELOG.md). 

## FAQ

### Where to look for help?

[Technical support](https://www.highcharts.com/support) will help you with Highcharts and with the wrapper.

If you have a bug to report or an enhancement suggestion please submit [Issues](https://github.com/highcharts/highcharts-react/issues) in this repository.

### Why highcharts-react-official and not highcharts-react is used?

The NPM package is registered as `highcharts-react-official` because `highcharts-react` was already taken.

### How to get a chart instance?

For class components and version prior to 3.0.0 use `React.createRef`:

```jsx
constructor(props) {
  super(props)
  this.chartRef = React.createRef();
}

render() {
  return (
    <HighchartsReact
      highcharts={ Highcharts }
      options={ options }
      ref={ this.chartRef }
    />
  );
}
```

For functional components and version 3.0.0 and later use `useRef` hook:

```jsx
  const chartComponent = useRef(null);
  const [options] = useState({...});

  useEffect(() => {
    const chart = chartComponent.current.chart;
    ...
  }, []);

  return <HighchartsReact ref={chartComponent} highcharts={Highcharts} options={options} />;
```

Alternatively store a chart reference in a callback function:

```jsx
afterChartCreated = (chart) => {
  // Highcharts creates a separate chart instance during export
  if (!chart.options.chart.forExport) {
    this.internalChart = chart;
  }
}

componentDidMount() {
  // example of use
  this.internalChart.addSeries({ data: [1, 2, 3] })
}

render() {
  return (
    <div>
      <h2>Highcharts</h2>
      <HighchartsReact
        highcharts={ Highcharts }
        options={ options }
        callback={ this.afterChartCreated }
      />
    </div>
  );
}
```

### How to add a module?

To add a module, import and initialize it:

```jsx
import Highcharts from 'highcharts'
import highchartsGantt from "highcharts/modules/gantt";
import HighchartsReact from 'highcharts-react-official'

// init the module
highchartsGantt(Highcharts);
```

alternative with `require`:

```jsx
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

require("highcharts/modules/variwide")(Highcharts);
```

### How to add React component to a chart's element?

By using [Portals](https://en.reactjs.org/docs/portals.html) it is possible to add a component to every HTML chart element.

Live example: https://codesandbox.io/s/1o5y7r31k3

### Why Highcharts mutates my data?

It can be confusing, since React props are read-only, but Highcharts for performance reasons mutates the original data array. This behaviour is NOT changed by our wrapper. You need to pass a copy of your data to the wrapper if you want to prevent mutations.

Issue: https://github.com/highcharts/highcharts-react/issues/326 <br>
More discussion here: https://github.com/highcharts/highcharts/issues/4259
