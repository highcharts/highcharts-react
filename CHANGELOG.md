# Changelog

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
