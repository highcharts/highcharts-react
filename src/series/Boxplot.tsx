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

import type { SeriesBoxplotOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

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
  children?: React.ReactNode;
}

export function BoxplotSeries(_props: BoxplotSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
BoxplotSeries.type = "Series";
Boxplot.Series = BoxplotSeries;

BoxplotSeries._HCReact = {
  type: "Series",
  HC_Option: "series.boxplot",
  childOption: "series.boxplot",
};

// TODO: Fix typings
// @ts-ignore:
BoxplotSeries.defaultProps = {
  type: "boxplot",
};

Boxplot.type = "SeriesChart";
export default Boxplot;
