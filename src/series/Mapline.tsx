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

import type { SeriesMaplineOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

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
    <Highcharts
      title={props.title}
      chartConstructor="mapChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface MaplineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMaplineOptions>;
}

export function MaplineSeries(_props: MaplineSeriesProps) {
  return null;
}

MaplineSeries.type = "Series";
Mapline.Series = MaplineSeries;

// TODO: Fix typings
// @ts-ignore:
MaplineSeries.defaultProps = {
  type: "mapline",
};

Mapline.type = "SeriesChart";
export default Mapline;
