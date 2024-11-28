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

import type { SeriesMapbubbleOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

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
    <Chart
      title={props.title}
      chartConstructor="mapChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface MapbubbleSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMapbubbleOptions>;
  children?: React.ReactNode;
}

export function MapbubbleSeries(_props: MapbubbleSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
MapbubbleSeries.type = "Series";
Mapbubble.Series = MapbubbleSeries;

MapbubbleSeries._HCReact = {
  type: "Series",
  HC_Option: "series.mapbubble",
  childOption: "series.mapbubble",
};

// TODO: Fix typings
// @ts-ignore:
MapbubbleSeries.defaultProps = {
  type: "mapbubble",
};

Mapbubble.type = "SeriesChart";
export default Mapbubble;
