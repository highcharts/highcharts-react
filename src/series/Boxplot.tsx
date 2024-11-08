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

import type { SeriesBoxplotOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/BoxPlot/BoxPlotSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Boxplot series
 */
const Boxplot = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "boxplot",
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

interface BoxplotSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBoxplotOptions>;
}

export function BoxplotSeries(_props: BoxplotSeriesProps) {
  return null;
}

BoxplotSeries.type = "Series";
Boxplot.Series = BoxplotSeries;

// TODO: Fix typings
// @ts-ignore:
BoxplotSeries.defaultProps = {
  type: "boxplot",
};

Boxplot.type = "SeriesChart";
export default Boxplot;
