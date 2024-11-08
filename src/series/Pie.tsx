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

import type { SeriesPieOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

/**
 * Pie series
 */
const Pie = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "pie",
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

interface PieSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPieOptions>;
}

export function PieSeries(_props: PieSeriesProps) {
  return null;
}

PieSeries.type = "Series";
Pie.Series = PieSeries;

// TODO: Fix typings
// @ts-ignore:
PieSeries.defaultProps = {
  type: "pie",
};

Pie.type = "SeriesChart";
export default Pie;
