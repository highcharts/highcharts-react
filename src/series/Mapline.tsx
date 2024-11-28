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

import type { SeriesMaplineOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

/**
 * Mapline series
 */
const Mapline = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "mapline",
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

interface MaplineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMaplineOptions>;
  children?: React.ReactNode;
}

export function MaplineSeries(_props: MaplineSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
MaplineSeries.type = "Series";
Mapline.Series = MaplineSeries;

MaplineSeries._HCReact = {
  type: "Series",
  HC_Option: "series.mapline",
  childOption: "series.mapline",
};

// TODO: Fix typings
// @ts-ignore:
MaplineSeries.defaultProps = {
  type: "mapline",
};

Mapline.type = "SeriesChart";
export default Mapline;
