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

import type { SeriesBarOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

/**
 * Bar series
 */
const Bar = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "bar",
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

interface BarSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBarOptions>;
  children?: React.ReactNode;
}

export function BarSeries(_props: BarSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
BarSeries.type = "Series";
Bar.Series = BarSeries;

BarSeries._HCReact = {
  type: "Series",
  HC_Option: "series.bar",
  childOption: "series.bar",
};

// TODO: Fix typings
// @ts-ignore:
BarSeries.defaultProps = {
  type: "bar",
};

Bar.type = "SeriesChart";
export default Bar;
