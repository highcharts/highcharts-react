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

import type { SeriesAreaOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

/**
 * Area series
 */
const Area = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "area",
        },
      },
      props.options || {}
    )
  );

  return (
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface AreaSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAreaOptions>;
}

export function AreaSeries(_props: AreaSeriesProps) {
  return null;
}

AreaSeries.type = "Series";
Area.Series = AreaSeries;

// TODO: Fix typings
// @ts-ignore:
AreaSeries.defaultProps = {
  type: "area",
};

Area.type = "SeriesChart";
export default Area;
