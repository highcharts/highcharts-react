/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesHistogramOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Histogram/HistogramSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
  children?: React.ReactNode;
}

export function HistogramSeries(_props: HistogramSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
HistogramSeries.type = "Series";
Histogram.Series = HistogramSeries;

HistogramSeries._HCReact = {
  type: "Series",
  HC_Option: "series.histogram",
  childOption: "series.histogram",
};

Histogram.type = "SeriesChart";
export default Histogram;
