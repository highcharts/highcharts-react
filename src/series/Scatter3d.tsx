/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesScatter3dOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Scatter3D/Scatter3DSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface Scatter3dSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesScatter3dOptions>;
}

export function Scatter3dSeries(_props: Scatter3dSeriesProps) {
  return null;
}

Scatter3dSeries.type = "Series";
Scatter3d.Series = Scatter3dSeries;

// TODO: Fix typings
// @ts-ignore:
Scatter3dSeries.defaultProps = {
  type: "scatter3d",
};

Scatter3d.type = "SeriesChart";
export default Scatter3d;
