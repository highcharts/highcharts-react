# Changelog

## v5.2.1
Corrected npm upload. Version 5.1.0 was wrongly uploaded as 5.2.0

## v5.2.0

Highcharts React v5.2.0 introduces full support for [highcharts](https://www.npmjs.com/package/highcharts) `v13.0.0`.

- Capped the Highcharts peer dependency at v13 (`^13.0.0`).
- Introduced [DataTable](https://www.highcharts.com/docs/react/components/chart-elements/dataTable) and [Palette](https://www.highcharts.com/docs/react/components/chart-elements/palette) option components.
- Fixed [Chart](https://www.highcharts.com/docs/react/components/chart) component's direct props and `options` merging.
- Fixed [Chart](https://www.highcharts.com/docs/react/components/chart) component's option resolution order so child components (e.g. `<Title>`) take precedence over direct props and `options`.
- Fixed missing `SeriesType` export and improved generic typing for the [Series](https://www.highcharts.com/docs/react/components/series-types#generic-series) component's `type`-specific fields.
- Fixed [Tooltip](https://www.highcharts.com/docs/react/components/chart-elements/tooltip) component incorrectly serializing a single `data-hc-option` child to `tooltip.format` instead of binding it to its named sub-option (e.g. `pointFormat`).
- Surfaced the changelog in a few more places for better visibility.
- Adjusted the [Tooltip](https://www.highcharts.com/docs/react/components/chart-elements/tooltip) component docs to mention the `useHTML` default.

## v5.1.0

- Capped the Highcharts peer dependency at v12 (`^12.0.0`).
- Added Highcharts version tags to JSDoc blocks.
- Fixed `Highcharts` import in the [Bundling and tree shaking](https://www.highcharts.com/docs/react/bundling-and-tree-shaking) article.
- Fixed missing and mismatched additional modules for series components. Closes [highcharts/highcharts-react#557](https://github.com/highcharts/highcharts-react/issues/557), [highcharts/highcharts-react#573](https://github.com/highcharts/highcharts-react/issues/573).
- Fixed primitive types being dropped from union types in generated components.
- Added the [v5 migration guide](https://www.highcharts.com/docs/react/v5-migration-guide) to the [highcharts-react](https://github.com/highcharts/highcharts-react/blob/master/.claude/skills/highcharts-react/SKILL.md) Claude skill.
- Fixed missing [heatmap](https://www.highcharts.com/docs/chart-and-series-types/heatmap) module import for the `HeatmapSeries` component.

## v5.0.0

Highcharts React v5.0.0 introduces breaking changes to module import paths, ESM bundling, Vite compatibility, and type naming. See the [v5 migration guide](https://www.highcharts.com/docs/react/v5-migration-guide) for quick migration steps.

### Features

- Migrated source modules to pure ESM paths (read more under [Bundling and tree shaking](https://www.highcharts.com/docs/react/bundling-and-tree-shaking)).
- Added support for [component wrapping](https://www.highcharts.com/docs/react/component-wrapping).
- Added support for the most common [series component options](https://www.highcharts.com/docs/react/components/series-types#dedicated-series-options) as props (`id`, `index`, `name`, `type`, `className`, `color`, `events`, `data`).
- Extended the [`Chart`](https://www.highcharts.com/docs/react/components/chart#props) component with common options exposed as props (`subtitle`, `caption`, `credits`, `type`, `height`, `width`, `inverted`, `animation`, `styledMode`, `backgroundColor`, `borderColor`, `margin`, `spacing`, `colors`).
- [`PlotOptions`](https://www.highcharts.com/docs/react/components/chart-elements/plot-options) now supports specific series keys (`line`, `column`) in addition to the generic `series` key.
- Implemented module components for [`Boost`](https://www.highcharts.com/docs/react/components/modules/boost), [`BrokenAxis`](https://www.highcharts.com/docs/react/components/modules/broken-axis), [`DraggablePoints`](https://www.highcharts.com/docs/react/components/modules/draggable-points), and [`StockTools`](https://www.highcharts.com/docs/react/components/modules/stock-tools) (closes [highcharts/highcharts-react#560](https://github.com/highcharts/highcharts-react/issues/560)).

### Bug fixes

- Fixed missing TypeScript type definitions for several component options.
- Removed incorrectly referenced source maps (closes [highcharts/highcharts-react#568](https://github.com/highcharts/highcharts-react/issues/568)).
- Fixed series updates to keep custom series props and avoid extra chart updates.
- Fixed nested series options to correctly merge parent and child option objects.
- Removed the `type` prop from dedicated series components (for example, `LineSeries` and `ColumnSeries`).
- Fixed `Highcharts.setOptions()` to apply chart options globally.
- Fixed mapped props generation to avoid injecting `undefined` values into options, preserving Highcharts defaults when props are omitted.
- Fixed array types (closes [highcharts/highcharts-react#559](https://github.com/highcharts/highcharts-react/issues/559)).
- Fixed CSS-related types and doclet state generation (closes [highcharts/highcharts-react#567](https://github.com/highcharts/highcharts-react/issues/567)).

## v4.2.1

- Fixed README.md elements alignment.

## v4.2.0

- Added documentation for all [React components](https://www.highcharts.com/docs/react/components/chart) available in the integration.
- Improved chart updates by reducing unnecessary re-renders.
- Removed ts declaration for series children prop.
- Prevented rendering errors in server-side environments.
- Improved our [migration guide from v3](https://www.highcharts.com/docs/react/v4-migration-guide).
- Disabled data mutation by default (controlled by [allowMutatingData](https://api.highcharts.com/highcharts/chart.allowMutatingData) set to `false`).
- Implemented a `Drilldown` component. Closes [highcharts/highcharts-react#546](https://github.com/highcharts/highcharts-react/issues/546).
- Narrowed generic `Series` component `options` prop to its corresponding type. Closes [highcharts/highcharts-react#541](https://github.com/highcharts/highcharts-react/issues/541).
- Replaced `renderToStaticMarkup` with a custom `renderToHTML` function. Closes [highcharts/highcharts-react#544](https://github.com/highcharts/highcharts-react/issues/544).

## v4.1.0

- Official release of v4!
- Removed indicators from `/series` directory
- We have published a [migration guide from v3](https://www.highcharts.com/docs/react/v4-migration-guide)
- Please open issues and let us know where you would like us to take this next.

## v4.0.0-beta.6

- Added support for providing options as arrays. Closes [highcharts/highcharts-react#532](https://github.com/highcharts/highcharts-react/issues/532).
- Replaced internal `ref` access with `forwardRef` to avoid React v18 warnings. Closes [highcharts/highcharts-react#529](https://github.com/highcharts/highcharts-react/issues/529).
- Used Highcharts.merge to merge in new options when updating components
- Call [chart.update](https://api.highcharts.com/class-reference/Highcharts.Chart#update) with `oneToOne` option set to true
- Changed naming of files and exports in `/series/` to have consistent casing with Highcharts.
- Stock indicators have been moved from `/series/` to `/indicators/`

## v4.0.0-beta.5

- Fixed issues with series components relying on bundles such as `highcharts-more`

## v4.0.0-beta.4

- Changed the `container` property for the passed `ref` to be the container element and not the internal ref
- Added back `containerProps` prop from previous versions

## v4.0.0-beta.3

- Changed the type of the `ref` prop to `React.ref`
- Removed debug logging by default. Logging can be enabled using the `Logger`
  object exported from i.e. `Highcharts.jsx`

## v4.0.0-beta.2

- Added the `ref` prop to the `Chart` components, which will be assigned to the
  chart instance and container element as in previous versions. Example:

  ```jsx
  import { Chart } from '@highcharts/react';

  function RefExample() {
    const ref = useRef();

    useEffect(() => {
      if (ref.current.chart) {
        // Do something with the chart instance
      }
    }, []);

    return <Chart ref={ref} />;
  }
  ```

## v4.0.0-beta.1

Initial beta of the reworked Highcharts React integration.
