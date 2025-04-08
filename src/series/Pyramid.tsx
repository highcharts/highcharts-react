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

import type { SeriesPyramidOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/pyramid.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Pyramid series
 */
const Pyramid = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "pyramid",
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

interface PyramidSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPyramidOptions>;
  children?: React.ReactNode;
}

export function PyramidSeries(_props: PyramidSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
PyramidSeries.type = "Series";
Pyramid.Series = PyramidSeries;

PyramidSeries._HCReact = {
  type: "Series",
  HC_Option: "series.pyramid",
  childOption: "series.pyramid",
};

Pyramid.type = "SeriesChart";
export default Pyramid;
