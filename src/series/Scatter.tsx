/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesScatterOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

/**
 * Scatter series
 */
const Scatter = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "scatter",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface ScatterSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesScatterOptions>;
}

export function ScatterSeries(_props: ScatterSeriesProps) {
  return null;
}

ScatterSeries.type = "Series";
Scatter.Series = ScatterSeries;

// TODO: Fix typings
// @ts-ignore:
ScatterSeries.defaultProps = {
  type: "scatter",
};

Scatter.type = "SeriesChart";
export default Scatter;
