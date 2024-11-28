/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesScatterOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

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
  children?: React.ReactNode;
}

export function ScatterSeries(_props: ScatterSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ScatterSeries.type = "Series";
Scatter.Series = ScatterSeries;

ScatterSeries._HCReact = {
  type: "Series",
  HC_Option: "series.scatter",
  childOption: "series.scatter",
};

// TODO: Fix typings
// @ts-ignore:
ScatterSeries.defaultProps = {
  type: "scatter",
};

Scatter.type = "SeriesChart";
export default Scatter;
