/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-04-30
 *
 */

import {
  useState,
  useEffect,
  useRef,
  React,
  // @ts-ignore
} from "react";

import * as Highcharts from "highcharts";
// import * as Data from 'highcharts/es-modules/data';

export const HighchartsNS = Highcharts;

// Data(Highcharts);

export interface ICommonSeriesAttributes {
  type?: string;
  data?: number[] | Object;
  options?: Highcharts.SeriesOptions;
  defaultProps?: {
    type: "string";
  };
}

export interface ICommonAttributes {
  /** Options override - applied first, other props are merged in. */
  options?: Highcharts.Options;
  /** Constructor to use */
  chartConstructor?: "chart" | "stockChart" | "ganttChart" | "mapChart";
  /** Children */
  children?: React.ReactNode;
  /** Links to Highcharts.Options.title.text */
  title?: string;
  /** Links to Highcharts.Options.data.csv */
  csv?: string;
  /** Links to Highcharts.Options.data.csvURL */
  csvURL?: string;
}

const toArr = (thing) => (Array.isArray(thing) ? thing : [thing]);

// TODO: The config merge needs to use a deep merge instead of Object.assign
export default function HighchartsComponent(props: ICommonAttributes) {
  const [chartConfig, setChartConfig] = useState<Highcharts.Options>(
    Object.assign(
      Object.assign(
        {
          title: { text: props.title || "My Chart" },
          data: {
            csv: props.csv || undefined,
            csvURL: props.csvURL || undefined,
          },
        },
        props.options || {}
      ),
      {
        series: props.children
          ? toArr(props.children).map((c) =>
              Object.assign(
                {
                  type: c.props.type || "line",
                  data: c.props.data || [],
                },
                c.props.options || {}
              )
            )
          : [],
      },
      props.options || {}
    )
  );

  const containerRef = useRef();
  const chartRef = useRef<Highcharts.Chart>();

  /** Append prop to chart config */
  const appendProps = (config: Highcharts.Options) => {
    config.title.text = props.title;
    config.data.csv = props.csv;
    config.data.csvURL = props.csvURL;
  };

  /** Append series to chart config */
  const appendSeries = () => {
    // config: Highcharts.Options
    if (props.children) {
      const children = toArr(props.children);
      children.forEach((c, i) => {
        console.log("Adding series to chart");

        if (c.props && c.props.data) {
          chartConfig.series[i].data = c.props.data;
        }

        if (c.props && c.props.options) {
          Object.assign(chartConfig.series[i], c.props.options);
        }
      });
      setChartConfig(chartConfig);
    }
  };

  // Update the chart on render
  useEffect(() => {
    console.log(JSON.stringify(chartConfig, undefined, "  "));
    if (!chartRef.current) {
      console.log(
        "Creating chart using",
        props.chartConstructor || "chart",
        "constructor"
      );
      chartRef.current = Highcharts[props.chartConstructor || "chart"](
        containerRef.current,
        chartConfig
      );
    } else {
      console.log("Updating chart");
      appendProps(chartConfig);
      appendSeries(); // chartConfig

      setChartConfig(chartConfig);
      chartRef.current.update(chartConfig);
    }
  });

  return <div ref={containerRef}></div>;
}
