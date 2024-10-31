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

import type { SeriesBarOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface BarSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBarOptions>;
}

export function BarSeries(_props: BarSeriesProps) {
  return null;
}

BarSeries.type = "Series";
Bar.Series = BarSeries;

// TODO: Fix typings
// @ts-ignore:
BarSeries.defaultProps = {
  type: "bar",
};

Bar.type = "SeriesChart";
export default Bar;
