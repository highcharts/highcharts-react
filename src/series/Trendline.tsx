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

import type { SeriesTrendlineOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/TrendLine/TrendLineIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Trendline series
 */
const Trendline = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "trendline",
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

interface TrendlineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTrendlineOptions>;
}

export function TrendlineSeries(_props: TrendlineSeriesProps) {
  return null;
}

TrendlineSeries.type = "Series";
Trendline.Series = TrendlineSeries;

// TODO: Fix typings
// @ts-ignore:
TrendlineSeries.defaultProps = {
  type: "trendline",
};

Trendline.type = "SeriesChart";
export default Trendline;
