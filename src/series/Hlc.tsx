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

import type { SeriesHlcOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

/**
 * Hlc series
 */
const Hlc = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "hlc",
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

interface HlcSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesHlcOptions>;
}

export function HlcSeries(_props: HlcSeriesProps) {
  return null;
}

HlcSeries.type = "Series";
Hlc.Series = HlcSeries;

// TODO: Fix typings
// @ts-ignore:
HlcSeries.defaultProps = {
  type: "hlc",
};

Hlc.type = "SeriesChart";
export default Hlc;
