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

import type { SeriesMappointOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

/**
 * Mappoint series
 */
const Mappoint = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "mappoint",
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

interface MappointSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMappointOptions>;
}

export function MappointSeries(_props: MappointSeriesProps) {
  return null;
}

MappointSeries.type = "Series";
Mappoint.Series = MappointSeries;

// TODO: Fix typings
// @ts-ignore:
MappointSeries.defaultProps = {
  type: "mappoint",
};

Mappoint.type = "SeriesChart";
export default Mappoint;
