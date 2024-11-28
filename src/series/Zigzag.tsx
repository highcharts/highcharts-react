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

import type { SeriesZigzagOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Zigzag/ZigzagIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Zigzag series
 */
const Zigzag = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "zigzag",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface ZigzagSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesZigzagOptions>;
  children?: React.ReactNode;
}

export function ZigzagSeries(_props: ZigzagSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ZigzagSeries.type = "Series";
Zigzag.Series = ZigzagSeries;

ZigzagSeries._HCReact = {
  type: "Series",
  HC_Option: "series.zigzag",
  childOption: "series.zigzag",
};

// TODO: Fix typings
// @ts-ignore:
ZigzagSeries.defaultProps = {
  type: "zigzag",
};

Zigzag.type = "SeriesChart";
export default Zigzag;
