# Changelog

## v__NEXT__
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
