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

import type { SeriesPolygonOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Polygon/PolygonSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Polygon series
 */
const Polygon = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "polygon",
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

interface PolygonSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPolygonOptions>;
  children?: React.ReactNode;
}

export function PolygonSeries(_props: PolygonSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
PolygonSeries.type = "Series";
Polygon.Series = PolygonSeries;

PolygonSeries._HCReact = {
  type: "Series",
  HC_Option: "series.polygon",
  childOption: "series.polygon",
};

// TODO: Fix typings
// @ts-ignore:
PolygonSeries.defaultProps = {
  type: "polygon",
};

Polygon.type = "SeriesChart";
export default Polygon;
