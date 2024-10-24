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

import type { SeriesMapbubbleOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

/**
 * Mapbubble series
 */
const Mapbubble = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "mapbubble",
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

interface MapbubbleSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMapbubbleOptions>;
}

export function MapbubbleSeries(_props: MapbubbleSeriesProps) {
  return null;
}

MapbubbleSeries.type = "Series";
Mapbubble.Series = MapbubbleSeries;

// TODO: Fix typings
// @ts-ignore:
MapbubbleSeries.defaultProps = {
  type: "mapbubble",
};

Mapbubble.type = "SeriesChart";
export default Mapbubble;
