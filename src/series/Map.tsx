/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesMapOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

/**
 * Map series
 */
const Map = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "map",
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

interface MapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMapOptions>;
}

export function MapSeries(_props: MapSeriesProps) {
  return null;
}

MapSeries.type = "Series";
Map.Series = MapSeries;

// TODO: Fix typings
// @ts-ignore:
MapSeries.defaultProps = {
  type: "map",
};

Map.type = "SeriesChart";
export default Map;
