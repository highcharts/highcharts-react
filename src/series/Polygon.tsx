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

import type { SeriesPolygonOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Polygon/PolygonSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface PolygonSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPolygonOptions>;
}

export function PolygonSeries(_props: PolygonSeriesProps) {
  return null;
}

PolygonSeries.type = "Series";
Polygon.Series = PolygonSeries;

// TODO: Fix typings
// @ts-ignore:
PolygonSeries.defaultProps = {
  type: "polygon",
};

Polygon.type = "SeriesChart";
export default Polygon;
