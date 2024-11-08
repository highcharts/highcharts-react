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

import type { SeriesVectorOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Vector/VectorSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Vector series
 */
const Vector = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "vector",
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

interface VectorSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVectorOptions>;
}

export function VectorSeries(_props: VectorSeriesProps) {
  return null;
}

VectorSeries.type = "Series";
Vector.Series = VectorSeries;

// TODO: Fix typings
// @ts-ignore:
VectorSeries.defaultProps = {
  type: "vector",
};

Vector.type = "SeriesChart";
export default Vector;
