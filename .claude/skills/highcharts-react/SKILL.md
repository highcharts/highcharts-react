---
name: highcharts-react
description: Use to implement, configure, and troubleshoot Highcharts in React projects. Trigger for Highcharts-related chart or data visualization work — when in doubt, use this skill if Highcharts is a candidate.
---

# Highcharts React (`@highcharts/react`)

> **Only use** @highcharts/react — the official Highcharts React package. All others are legacy and incompatible.

---

## Workflow

1. **Fetch docs for every concept** before implementing.
2. **Check rules** before implementing.
3. **Implement** based on the fetched docs and rules.

---

## Fetch docs before implementing

Fetch docs for every concept the query touches across all three tables in parallel — skipping any will cause broken implementations.

### Topics

| Doc                      | Covers                                                       | URL                                                                   |
| ------------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| Getting started          | Installation and first chart setup                           | https://www.highcharts.com/docs/react/getting-started                 |
| Chart                    | Core, Stock, Maps and Gantt chart components and their props | https://www.highcharts.com/docs/react/components/chart                |
| Series types             | Dedicated and generic series components                      | https://www.highcharts.com/docs/react/components/series-types         |
| Technical indicators     | Indicator components for Stock charts                        | https://www.highcharts.com/docs/react/components/technical-indicators |
| Data handling            | Managing chart data with React state                         | https://www.highcharts.com/docs/react/data-handling                   |
| Chart instance           | Accessing the chart object via ref                           | https://www.highcharts.com/docs/react/chart-instance                  |
| Highcharts instance      | Global Highcharts configuration                              | https://www.highcharts.com/docs/react/highcharts-instance             |
| Options/component format | JSX and React components as option children                  | https://www.highcharts.com/docs/react/options-component-format        |
| Component children       | Child-to-option binding reference                            | https://www.highcharts.com/docs/react/component-children              |
| TypeScript               | TypeScript types for the integration                         | https://www.highcharts.com/docs/react/typescript                      |
| Next.js                  | Using Highcharts in Next.js                                  | https://www.highcharts.com/docs/react/nextjs                          |
| Bundling & tree shaking  | Bundle optimization and ESM imports                          | https://www.highcharts.com/docs/react/bundling-and-tree-shaking       |
| Migration guide          | Migrating from v3 (`highcharts-react-official`)              | https://www.highcharts.com/docs/react/v4-migration-guide              |

### Chart element components

| Doc         | Covers                      | URL                                                                          |
| ----------- | --------------------------- | ---------------------------------------------------------------------------- |
| Title       | Chart title                 | https://www.highcharts.com/docs/react/components/chart-elements/title        |
| Subtitle    | Chart subtitle              | https://www.highcharts.com/docs/react/components/chart-elements/subtitle     |
| Credits     | Chart credits               | https://www.highcharts.com/docs/react/components/chart-elements/credits      |
| Legend      | Chart legend                | https://www.highcharts.com/docs/react/components/chart-elements/legend       |
| PlotOptions | Shared series configuration | https://www.highcharts.com/docs/react/components/chart-elements/plot-options |
| Tooltip     | Chart tooltip               | https://www.highcharts.com/docs/react/components/chart-elements/tooltip      |
| XAxis       | X-axis configuration        | https://www.highcharts.com/docs/react/components/chart-elements/x-axis       |
| YAxis       | Y-axis configuration        | https://www.highcharts.com/docs/react/components/chart-elements/y-axis       |

### Module components

| Doc                    | Covers                      | URL                                                                       |
| ---------------------- | --------------------------- | ------------------------------------------------------------------------- |
| Accessibility module   | Accessibility configuration | https://www.highcharts.com/docs/react/components/modules/accessibility    |
| Boost module           | Large dataset performance   | https://www.highcharts.com/docs/react/components/modules/boost            |
| BrokenAxis module      | Axis breaks and gaps        | https://www.highcharts.com/docs/react/components/modules/broken-axis      |
| Data module            | External data loading       | https://www.highcharts.com/docs/react/components/modules/data             |
| DraggablePoints module | Interactive point dragging  | https://www.highcharts.com/docs/react/components/modules/draggable-points |
| Drilldown module       | Nested chart navigation     | https://www.highcharts.com/docs/react/components/modules/drilldown        |
| Exporting module       | Chart export and print      | https://www.highcharts.com/docs/react/components/modules/exporting        |
| StockTools module      | Stock chart toolbar         | https://www.highcharts.com/docs/react/components/modules/stock-tools      |

---

## Rules

- **Never** call imperative Highcharts methods — always update through React state to keep React and Highcharts states in sync.
- **Never** nest series components inside axis or option components — the library only resolves them as direct children of the chart root.
- **Always** prefer JSX children over the `options` prop for chart configuration to keep the code declarative and maintainable.
- **Always** prefer dedicated series components over the generic `Series` to keep the code maintainable — use `Series` only for dynamic series.
- **Always** prefer core Highcharts over full product bundles — import only the modules you need to optimize bundle size and performance.
- **Always** add `'use client'` to files using Highcharts in projects using React Server Components — Highcharts requires a browser environment.

---

## Imports

| What                     | From                                                     |
| ------------------------ | -------------------------------------------------------- |
| Chart element components | `@highcharts/react`                                      |
| Series components        | `@highcharts/react/series/<PascalCaseName>`              |
| Module components        | `@highcharts/react/modules/<PascalCaseName>`             |
| Additional modules       | `highcharts/es-modules/masters/modules/<module-name>.js` |
