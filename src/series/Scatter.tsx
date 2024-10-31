/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
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

import { Highcharts, HighchartsNS } from "../Highcharts";

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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
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
