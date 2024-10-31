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

import type { SeriesHollowcandlestickOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/HollowCandlestick/HollowCandlestickSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface HollowcandlestickSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesHollowcandlestickOptions>;
}

export function HollowcandlestickSeries(_props: HollowcandlestickSeriesProps) {
  return null;
}

HollowcandlestickSeries.type = "Series";
Hollowcandlestick.Series = HollowcandlestickSeries;

// TODO: Fix typings
// @ts-ignore:
HollowcandlestickSeries.defaultProps = {
  type: "hollowcandlestick",
};

Hollowcandlestick.type = "SeriesChart";
export default Hollowcandlestick;
