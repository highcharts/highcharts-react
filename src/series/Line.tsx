/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesLineOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

/**
 * Line series
 */
const Line = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "line",
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

interface LineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesLineOptions>;
}

export function LineSeries(_props: LineSeriesProps) {
  return null;
}

LineSeries.type = "Series";
Line.Series = LineSeries;

// TODO: Fix typings
// @ts-ignore:
LineSeries.defaultProps = {
  type: "line",
};

Line.type = "SeriesChart";
export default Line;
