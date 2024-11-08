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

import type { SeriesHistogramOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Histogram/HistogramSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Histogram series
 */
const Histogram = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "histogram",
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

interface HistogramSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesHistogramOptions>;
}

export function HistogramSeries(_props: HistogramSeriesProps) {
  return null;
}

HistogramSeries.type = "Series";
Histogram.Series = HistogramSeries;

// TODO: Fix typings
// @ts-ignore:
HistogramSeries.defaultProps = {
  type: "histogram",
};

Histogram.type = "SeriesChart";
export default Histogram;
