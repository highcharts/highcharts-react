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

import type { SeriesColumnrangeOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ColumnRange/ColumnRangeSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Columnrange series
 */
const Columnrange = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "columnrange",
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

interface ColumnrangeSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesColumnrangeOptions>;
}

export function ColumnrangeSeries(_props: ColumnrangeSeriesProps) {
  return null;
}

ColumnrangeSeries.type = "Series";
Columnrange.Series = ColumnrangeSeries;

// TODO: Fix typings
// @ts-ignore:
ColumnrangeSeries.defaultProps = {
  type: "columnrange",
};

Columnrange.type = "SeriesChart";
export default Columnrange;
