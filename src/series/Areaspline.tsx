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

import type { SeriesAreasplineOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

/**
 * Areaspline series
 */
const Areaspline = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "areaspline",
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

interface AreasplineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAreasplineOptions>;
}

export function AreasplineSeries(_props: AreasplineSeriesProps) {
  return null;
}

AreasplineSeries.type = "Series";
Areaspline.Series = AreasplineSeries;

// TODO: Fix typings
// @ts-ignore:
AreasplineSeries.defaultProps = {
  type: "areaspline",
};

Areaspline.type = "SeriesChart";
export default Areaspline;
