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

import type { SeriesMapDataOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Map/MapSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="mapChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
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
