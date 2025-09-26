# Changelog

## 4.0.0-beta.6

* Added support for providing options as arrays. Closes [highcharts/highcharts-react#532](https://github.com/highcharts/highcharts-react/issues/532).
* Replaced internal `ref` access with `forwardRef` to avoid React v18 warnings. Closes [highcharts/highcharts-react#529](https://github.com/highcharts/highcharts-react/issues/529).
* Used Highcharts.merge to merge in new options when updating components
* Call [chart.update](https://api.highcharts.com/class-reference/Highcharts.Chart#update) with `oneToOne` option set to true
* Changed naming of files and exports in `/series/` to have consistent casing with Highcharts.
* Stock indicators have been moved from `/series/` to `/indicators/`

## v4.0.0-beta.5

* Fixed issues with series components relying on bundles such as `highcharts-more`

## v4.0.0-beta.4

* Changed the `container` property for the passed `ref` to be the container element and not the internal ref
* Added back `containerProps` prop from previous versions

## v4.0.0-beta.3
* Changed the type of the `ref` prop to `React.ref`
* Removed debug logging by default. Logging can be enabled using the `Logger`
  object exported from i.e. `Highcharts.jsx`

## v4.0.0-beta.2
* Added the `ref` prop to the `Chart` components, which will be assigned to the
chart instance and container element as in previous versions. Example:
  ```jsx
  import { Chart } from '@highcharts/react';

  function RefExample(){
    const ref = useRef();

    useEffect(() => {
      if (ref.current.chart) {
        // Do something with the chart instance
      }
    },[])

    return (<Chart ref={ref} />);
  }
  ```

## v4.0.0-beta.1
Initial beta of the reworked Highcharts React integration.
