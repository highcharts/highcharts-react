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

import type { SeriesPyramid3dOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Pyramid3D/Pyramid3DSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Pyramid3d series
 */
const Pyramid3d = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "pyramid3d",
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

interface Pyramid3dSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPyramid3dOptions>;
  children?: React.ReactNode;
}

export function Pyramid3dSeries(_props: Pyramid3dSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
Pyramid3dSeries.type = "Series";
Pyramid3d.Series = Pyramid3dSeries;

Pyramid3dSeries._HCReact = {
  type: "Series",
  HC_Option: "series.pyramid3d",
  childOption: "series.pyramid3d",
};

// TODO: Fix typings
// @ts-ignore:
Pyramid3dSeries.defaultProps = {
  type: "pyramid3d",
};

Pyramid3d.type = "SeriesChart";
export default Pyramid3d;
