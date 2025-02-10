/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesXrangeOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/XRange/XRangeSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface XrangeSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesXrangeOptions>;
  children?: React.ReactNode;
}

export function XrangeSeries(_props: XrangeSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
XrangeSeries.type = "Series";
Xrange.Series = XrangeSeries;

XrangeSeries._HCReact = {
  type: "Series",
  HC_Option: "series.xrange",
  childOption: "series.xrange",
};

Xrange.type = "SeriesChart";
export default Xrange;
