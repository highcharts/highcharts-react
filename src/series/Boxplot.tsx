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

import type { SeriesBoxplotOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/BoxPlot/BoxPlotSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
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
