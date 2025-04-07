/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesColumnrangeOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ColumnRange/ColumnRangeSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
  children?: React.ReactNode;
}

export function ColumnrangeSeries(_props: ColumnrangeSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ColumnrangeSeries.type = "Series";
Columnrange.Series = ColumnrangeSeries;

ColumnrangeSeries._HCReact = {
  type: "Series",
  HC_Option: "series.columnrange",
  childOption: "series.columnrange",
};

Columnrange.type = "SeriesChart";
export default Columnrange;
