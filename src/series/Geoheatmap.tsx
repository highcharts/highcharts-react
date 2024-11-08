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

import type { SeriesGeoheatmapOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/GeoHeatmap/GeoHeatmapSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Geoheatmap series
 */
const Geoheatmap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "geoheatmap",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart
      title={props.title}
      chartConstructor="mapChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface GeoheatmapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesGeoheatmapOptions>;
}

export function GeoheatmapSeries(_props: GeoheatmapSeriesProps) {
  return null;
}

GeoheatmapSeries.type = "Series";
Geoheatmap.Series = GeoheatmapSeries;

// TODO: Fix typings
// @ts-ignore:
GeoheatmapSeries.defaultProps = {
  type: "geoheatmap",
};

Geoheatmap.type = "SeriesChart";
export default Geoheatmap;
