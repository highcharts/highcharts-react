# Highcharts React

<div align='center'>
_Official Highcharts for React_

<img src="https://assets.highcharts.com/images/highcharts-logo.svg" />

Highcharts for React makes integrating Highcharts data visualizations into your React projects intuitive and aligned with your React workflow, built from the ground up with an API refined for React patterns.

![NPM Version](https://img.shields.io/npm/v/%40highcharts%2Freact?style=flat&logoColor=white&label=npm&labelColor=2a2a2a&color=e53e3e)
![NPM Downloads](https://img.shields.io/npm/dm/%40highcharts%2Freact?style=flat&logoColor=white&label=downloads&labelColor=2a2a2a&color=10b981)
![Discord](https://img.shields.io/discord/1318933807059042305?style=flat&logoColor=white&label=discord&labelColor=2a2a2a&color=5865F2)

<img src="https://assets.highcharts.com/images/highcharts-charts.gif" />

</div>

## Why Highcharts React?

- **JSX-Native API** - An API built for React with clean syntax and patterns
- **Supports All Chart Types** - From basic charts to advanced Stock, Gantt, and Maps: covering a wide range of visualizations
- **Custom Component Integration** - Easily use custom React components in your charts without workarounds
- **Full ES Module Support** - Built for ESM and tree shaking
- **Big Data Ready** - WebGL-powered Boost Module lets you render millions of data points if needed
- **Accessibility First** - World class accessibility features help you reach the widest audience possible.
- **Zero Dependencies** - Lightweight, and written from scratch with **ZERO** external dependencies

## License

Getting licensed for commercial use makes you production-ready: license, updates and support for business-critical charts. To learn more, please contact our sales team at sales@highcharts.com. You can also review our Standard License Terms and our Annual License at the links below:

- [Standard License Terms](https://www.highcharts.com/license)
- [Terms & Conditions for Annual Subscription](https://shop.highcharts.com/license-annual-3.0)

## Installation

Install Highcharts from npm:

```bash
npm install highcharts @highcharts/react
```

Or using yarn:

```bash
yarn add highcharts @highcharts/react
```

`@highcharts/react` requires `react` and `react-dom` as peer dependencies. If they are not already part of your project, you can add them:

```bash
npm install react react-dom
```

## Quick Start

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Chart, Title, Series } from '@highcharts/react';
import { ColumnSeries } from '@highcharts/react/series/Column';
import { AreaSeries } from '@highcharts/react/series/Area';

export function Application() {
  return (
    <Chart>
      <Title>Chart with multiple series types</Title>
      <Series
        data={[2, 4, 3, 1, 5]}
        options={{ name: 'Line series', color: 'red' }}
      />
      <ColumnSeries
        data={[3, 5, 1, 2, 4]}
        options={{ name: 'Column series', color: 'yellow' }}
      />
      <AreaSeries
        data={[4, 2, 1, 5, 3]}
        options={{ name: 'Area series', color: 'blue' }}
      />
    </Chart>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<Application />);
```

## Container props

The chart is rendered inside a `<div>` container. You can pass props directly to
that container using `containerProps` (for example, to set width/height, add a
`className`, or attach data attributes):

```jsx
<Chart
  containerProps={{
    className: 'chart-shell',
    style: { width: '100%', height: '100%' }
  }}
>
  <Title>Full-width chart</Title>
  <Series data={[1, 2, 3]} />
</Chart>
```

## Documentation

For comprehensive guides and API documentation, visit the [Highcharts React documentation](https://www.highcharts.com/docs/react/getting-started).

## Support and feedback

We love to learn how you are using Highcharts, and what you would like to see from us in the future.

Join our vibrant community on [GitHub](https://github.com/highcharts/highcharts), [Stack Overflow](https://stackoverflow.com/tags/highcharts/), [Discord](https://discord.com/invite/xHxxcyyy6K), and the [Highcharts Forums](https://www.highcharts.com/forum/).

Commercial support packages are available, see [Highcharts Advantage](https://www.highcharts.com/highcharts-advantage/).
