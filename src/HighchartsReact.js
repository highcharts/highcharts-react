import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef
} from 'react';

// React currently throws a warning when using `useLayoutEffect` on the server.
// To get around it, we can conditionally `useEffect` on the server (no-op) and
// `useLayoutEffect` in the browser. We need `useLayoutEffect` to ensure the
// `Highcharts` ref is available in the layout phase. This makes it available
// in a parent component's `componentDidMount`.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const HighchartsReact = memo(forwardRef(
  function HighchartsReact(props, ref) {
    const containerRef = useRef();
    const chartRef = useRef();
    const constructorType = useRef(props.constructorType);
    const highcharts = useRef(props.highcharts);

    useIsomorphicLayoutEffect(() => {
      function createChart() {
        const H = props.highcharts || (
          typeof window === 'object' && window.Highcharts
        );
        const constructorType = props.constructorType || 'chart';
  
        if (!H) {
          console.warn('The "highcharts" property was not passed.');
  
        } else if (!H[constructorType]) {
          console.warn(
            'The "constructorType" property is incorrect or some ' +
              'required module is not imported.'
          );
        } else if (!props.options) {
          console.warn('The "options" property was not passed.');
  
        } else {
          // Create a chart
          chartRef.current = H[constructorType](
            containerRef.current,
            props.options,
            props.callback
          );
        }
      }

      if (!chartRef.current) {
        createChart();
      } else {
        if (props.allowChartUpdate !== false) {
          // Reacreate chart on Highcharts or constructor type change
          if (
            props.constructorType !== constructorType.current ||
            props.highcharts !== highcharts.current
          ) {
            constructorType.current = props.constructorType;
            highcharts.current = props.highcharts;
            createChart();
          // Use `chart.update` to apply changes
          } else if (!props.immutable && chartRef.current) {
            chartRef.current.update(
              props.options,
              ...(props.updateArgs || [true, true])
            );
          } else {
            createChart();
          }
        }
      }
    }, [
      props.options,
      props.allowChartUpdate,
      props.updateArgs,
      props.containerProps,
      props.highcharts,
      props.constructorType
    ]);

    // Destroy the chart on unmount
    useIsomorphicLayoutEffect(() => {
      return () => {
        if (chartRef.current) {
          chartRef.current.destroy();
          chartRef.current = null;
        }
      };
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        get chart() {
          return chartRef.current;
        },
        container: containerRef
      }),
      []
    );

    // Create container for the chart
    return <div { ...props.containerProps } ref={ containerRef } />;
  }
));

export default HighchartsReact;
