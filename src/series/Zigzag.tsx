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

import type { SeriesZigzagOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Zigzag/ZigzagIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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

Zigzag.type = "SeriesChart";
export default Zigzag;
