/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesMapDataOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Map/MapSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
  children?: React.ReactNode;
}

export function MapDataSeries(_props: MapDataSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
MapDataSeries.type = "Series";
MapData.Series = MapDataSeries;

MapDataSeries._HCReact = {
  type: "Series",
  HC_Option: "series.mapdata",
  childOption: "series.mapdata",
};

MapData.type = "SeriesChart";
export default MapData;
