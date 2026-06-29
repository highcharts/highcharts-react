# Highcharts React

<div align='center'>

<i>Official Highcharts for React</i>

<img src="https://assets.highcharts.com/images/highcharts-logo.svg" />

<p>Highcharts for React makes integrating Highcharts data visualizations into your React projects intuitive and aligned with your React workflow, built from the ground up with an API refined for React patterns.</p>

<img src="https://img.shields.io/npm/v/%40highcharts%2Freact?style=flat&logoColor=white&label=npm&labelColor=2a2a2a&color=e53e3e" alt="NPM Version" />
<img src="https://img.shields.io/npm/dm/%40highcharts%2Freact?style=flat&logoColor=white&label=downloads&labelColor=2a2a2a&color=10b981" alt="NPM Downloads" />
<img src="https://img.shields.io/discord/1318933807059042305?style=flat&logoColor=white&label=discord&labelColor=2a2a2a&color=5865F2" alt="Discord" />
<a href="./CHANGELOG.md"><img src="https://img.shields.io/badge/changelog-view-blue?style=flat&logoColor=white&labelColor=2a2a2a&color=3b82f6" alt="Changelog" /></a>

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
npm install @highcharts/react
```

Or using yarn:

```bash
yarn add @highcharts/react
```

> **Note:** `highcharts`, `react`, and `react-dom` are included as peer dependencies and are installed automatically with npm v7+.

## Quick Start

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Chart, Title } from '@highcharts/react';
import { LineSeries } from '@highcharts/react/series/Line';
import { ColumnSeries } from '@highcharts/react/series/Column';
import { AreaSeries } from '@highcharts/react/series/Area';

export function Application() {
  return (
    <Chart>
      <Title>Chart with multiple series types</Title>
      <LineSeries data={[2, 4, 3, 1, 5]} name="Line series" color="red" />
      <ColumnSeries
        data={[3, 5, 1, 2, 4]}
        name="Column series"
        color="yellow"
      />
      <AreaSeries data={[4, 2, 1, 5, 3]} name="Area series" color="blue" />
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

## TypeScript

Use `ChartOptions` for the `Chart` component `options` prop.

```tsx
import { useState } from 'react';
import { Chart, type ChartOptions } from '@highcharts/react';

export function App() {
  const [options] = useState<ChartOptions>({
    series: [{ type: 'line', data: [1, 2, 3] }]
  });

  return <Chart options={options} />;
}
```

This is the recommended type over importing `Options` directly from Highcharts.

Use `SeriesOptions<'line'>` when you want to type an `options` object for a specific series component.

```tsx
import { useState } from 'react';
import { Chart, type SeriesOptions } from '@highcharts/react';
import { LineSeries } from '@highcharts/react/series/Line';

export function App() {
  const [options] = useState<SeriesOptions<'line'>>({
    color: 'red'
  });

  return (
    <Chart>
      <LineSeries options={options} />
    </Chart>
  );
}
```

Provide the series type as the generic parameter to match the `options` prop of the corresponding series component.
`SeriesProps` follows the same pattern and defaults to `'line'` when no generic parameter is provided.

```tsx
import type { SeriesProps } from '@highcharts/react';

const props: SeriesProps = {
  color: 'red'
};
```

Use `SeriesProps<'pie'>` to type props for a different series component.
For React-specific typing guidance, see the [React TypeScript documentation](https://www.highcharts.com/docs/react/typescript).

## Claude Skill

Highcharts React ships with a Claude skill to help you work properly with Highcharts in React projects. To automatically add it to your `.claude/skills/` directory, run:

```bash
node node_modules/@highcharts/react/scripts/highcharts-react-skill
```

Alternatively, you can find the skill at `node_modules/@highcharts/react/.claude/skills/highcharts-react/SKILL.md`.

## Documentation

For comprehensive guides and API documentation, visit the [Highcharts React documentation](https://www.highcharts.com/docs/react/getting-started), including the [TypeScript guide](https://www.highcharts.com/docs/react/typescript).

## Support and feedback

We love to learn how you are using Highcharts, and what you would like to see from us in the future.

Join our vibrant community on [GitHub](https://github.com/highcharts/highcharts), [Stack Overflow](https://stackoverflow.com/tags/highcharts/), [Discord](https://discord.com/invite/xHxxcyyy6K), and the [Highcharts Forums](https://www.highcharts.com/forum/).

Commercial support packages are available, see [Highcharts Advantage](https://www.highcharts.com/highcharts-advantage/).
