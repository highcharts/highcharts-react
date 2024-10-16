/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
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

Area.Series = (_props: AreaSeriesProps) => <></>;

Area.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Area.Series.defaultProps = {
  type: "area",
};

Area.type = "SeriesChart";
export default Area;
