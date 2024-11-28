/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesFunnel3dOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Funnel3D/Funnel3DSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Funnel3d series
 */
const Funnel3d = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "funnel3d",
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

interface Funnel3dSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesFunnel3dOptions>;
  children?: React.ReactNode;
}

export function Funnel3dSeries(_props: Funnel3dSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
Funnel3dSeries.type = "Series";
Funnel3d.Series = Funnel3dSeries;

Funnel3dSeries._HCReact = {
  type: "Series",
  HC_Option: "series.funnel3d",
  childOption: "series.funnel3d",
};

// TODO: Fix typings
// @ts-ignore:
Funnel3dSeries.defaultProps = {
  type: "funnel3d",
};

Funnel3d.type = "SeriesChart";
export default Funnel3d;
