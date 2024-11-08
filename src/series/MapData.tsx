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

import type { SeriesMapDataOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Map/MapSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * MapData series
 */
const MapData = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "mapdata",
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

interface MapDataSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMapDataOptions>;
}

export function MapDataSeries(_props: MapDataSeriesProps) {
  return null;
}

MapDataSeries.type = "Series";
MapData.Series = MapDataSeries;

// TODO: Fix typings
// @ts-ignore:
MapDataSeries.defaultProps = {
  type: "mapdata",
};

MapData.type = "SeriesChart";
export default MapData;
