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

import type { SeriesColumnOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

/**
 * Column series
 */
const Column = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "column",
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

interface ColumnSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesColumnOptions>;
}

export function ColumnSeries(_props: ColumnSeriesProps) {
  return null;
}

ColumnSeries.type = "Series";
Column.Series = ColumnSeries;

// TODO: Fix typings
// @ts-ignore:
ColumnSeries.defaultProps = {
  type: "column",
};

Column.type = "SeriesChart";
export default Column;
