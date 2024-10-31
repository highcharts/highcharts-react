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

import type { SeriesXrangeOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/XRange/XRangeSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Xrange series
 */
const Xrange = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "xrange",
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

interface XrangeSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesXrangeOptions>;
}

export function XrangeSeries(_props: XrangeSeriesProps) {
  return null;
}

XrangeSeries.type = "Series";
Xrange.Series = XrangeSeries;

// TODO: Fix typings
// @ts-ignore:
XrangeSeries.defaultProps = {
  type: "xrange",
};

Xrange.type = "SeriesChart";
export default Xrange;
