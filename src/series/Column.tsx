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

import type { SeriesColumnOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

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
  children?: React.ReactNode;
}

export function ColumnSeries(_props: ColumnSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ColumnSeries.type = "Series";
Column.Series = ColumnSeries;

ColumnSeries._HCReact = {
  type: "Series",
  HC_Option: "series.column",
  childOption: "series.column",
};

// TODO: Fix typings
// @ts-ignore:
ColumnSeries.defaultProps = {
  type: "column",
};

Column.type = "SeriesChart";
export default Column;
