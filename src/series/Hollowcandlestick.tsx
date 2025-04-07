/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesHollowcandlestickOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/HollowCandlestick/HollowCandlestickSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Hollowcandlestick series
 */
const Hollowcandlestick = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "hollowcandlestick",
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

interface HollowcandlestickSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesHollowcandlestickOptions>;
  children?: React.ReactNode;
}

export function HollowcandlestickSeries(_props: HollowcandlestickSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
HollowcandlestickSeries.type = "Series";
Hollowcandlestick.Series = HollowcandlestickSeries;

HollowcandlestickSeries._HCReact = {
  type: "Series",
  HC_Option: "series.hollowcandlestick",
  childOption: "series.hollowcandlestick",
};

Hollowcandlestick.type = "SeriesChart";
export default Hollowcandlestick;
