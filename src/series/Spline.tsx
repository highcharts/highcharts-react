/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
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

Spline.Series = (_props: SplineSeriesProps) => <></>;

Spline.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Spline.Series.defaultProps = {
  type: "spline",
};

Spline.type = "SeriesChart";
export default Spline;
