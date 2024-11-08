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

import type { SeriesColumnpyramidOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ColumnPyramid/ColumnPyramidSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Columnpyramid series
 */
const Columnpyramid = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "columnpyramid",
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

interface ColumnpyramidSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesColumnpyramidOptions>;
}

export function ColumnpyramidSeries(_props: ColumnpyramidSeriesProps) {
  return null;
}

ColumnpyramidSeries.type = "Series";
Columnpyramid.Series = ColumnpyramidSeries;

// TODO: Fix typings
// @ts-ignore:
ColumnpyramidSeries.defaultProps = {
  type: "columnpyramid",
};

Columnpyramid.type = "SeriesChart";
export default Columnpyramid;
