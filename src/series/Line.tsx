/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesLineOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

if (typeof getHighcharts().__provided === "undefined") {
}

/**
 * Line series
 */
const Line = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "line",
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

interface LineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesLineOptions>;
  children?: React.ReactNode;
}

export function LineSeries(_props: LineSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
LineSeries.type = "Series";
Line.Series = LineSeries;

LineSeries._HCReact = {
  type: "Series",
  HC_Option: "series.line",
  childOption: "series.line",
};

Line.type = "SeriesChart";
export default Line;
