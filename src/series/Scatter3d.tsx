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

import type { SeriesScatter3dOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/scatter3d.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Scatter3d series
 */
const Scatter3d = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "scatter3d",
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

interface Scatter3dSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesScatter3dOptions>;
  children?: React.ReactNode;
}

export function Scatter3dSeries(_props: Scatter3dSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
Scatter3dSeries.type = "Series";
Scatter3d.Series = Scatter3dSeries;

Scatter3dSeries._HCReact = {
  type: "Series",
  HC_Option: "series.scatter3d",
  childOption: "series.scatter3d",
};

Scatter3d.type = "SeriesChart";
export default Scatter3d;
