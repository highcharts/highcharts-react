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

import type { SeriesOhlcOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

/**
 * Ohlc series
 */
const Ohlc = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "ohlc",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface OhlcSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesOhlcOptions>;
}

export function OhlcSeries(_props: OhlcSeriesProps) {
  return null;
}

OhlcSeries.type = "Series";
Ohlc.Series = OhlcSeries;

// TODO: Fix typings
// @ts-ignore:
OhlcSeries.defaultProps = {
  type: "ohlc",
};

Ohlc.type = "SeriesChart";
export default Ohlc;
