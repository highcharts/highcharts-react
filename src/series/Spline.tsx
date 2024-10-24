/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesSplineOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface SplineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSplineOptions>;
}

export function SplineSeries(_props: SplineSeriesProps) {
  return null;
}

SplineSeries.type = "Series";
Spline.Series = SplineSeries;

// TODO: Fix typings
// @ts-ignore:
SplineSeries.defaultProps = {
  type: "spline",
};

Spline.type = "SeriesChart";
export default Spline;
