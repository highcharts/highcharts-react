/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesVectorOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Vector/VectorSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
  children?: React.ReactNode;
}

export function VectorSeries(_props: VectorSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
VectorSeries.type = "Series";
Vector.Series = VectorSeries;

VectorSeries._HCReact = {
  type: "Series",
  HC_Option: "series.vector",
  childOption: "series.vector",
};

Vector.type = "SeriesChart";
export default Vector;
