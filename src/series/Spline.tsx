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

import type { SeriesSplineOptions } from "highcharts/highcharts";
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
 * Spline series
 */
const Spline = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "spline",
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

interface SplineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSplineOptions>;
  children?: React.ReactNode;
}

export function SplineSeries(_props: SplineSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
SplineSeries.type = "Series";
Spline.Series = SplineSeries;

SplineSeries._HCReact = {
  type: "Series",
  HC_Option: "series.spline",
  childOption: "series.spline",
};

Spline.type = "SeriesChart";
export default Spline;
