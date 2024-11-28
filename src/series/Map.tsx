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

import type { SeriesMapOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

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
    <Chart
      title={props.title}
      chartConstructor="mapChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface MapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMapOptions>;
  children?: React.ReactNode;
}

export function MapSeries(_props: MapSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
MapSeries.type = "Series";
Map.Series = MapSeries;

MapSeries._HCReact = {
  type: "Series",
  HC_Option: "series.map",
  childOption: "series.map",
};

// TODO: Fix typings
// @ts-ignore:
MapSeries.defaultProps = {
  type: "map",
};

Map.type = "SeriesChart";
export default Map;
