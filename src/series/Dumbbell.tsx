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

import type { SeriesDumbbellOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Dumbbell/DumbbellSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Dumbbell series
 */
const Dumbbell = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "dumbbell",
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

interface DumbbellSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesDumbbellOptions>;
}

export function DumbbellSeries(_props: DumbbellSeriesProps) {
  return null;
}

DumbbellSeries.type = "Series";
Dumbbell.Series = DumbbellSeries;

// TODO: Fix typings
// @ts-ignore:
DumbbellSeries.defaultProps = {
  type: "dumbbell",
};

Dumbbell.type = "SeriesChart";
export default Dumbbell;
