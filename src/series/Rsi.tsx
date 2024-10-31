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

import type { SeriesRsiOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/RSI/RSIIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Rsi series
 */
const Rsi = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "rsi",
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

interface RsiSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesRsiOptions>;
}

export function RsiSeries(_props: RsiSeriesProps) {
  return null;
}

RsiSeries.type = "Series";
Rsi.Series = RsiSeries;

// TODO: Fix typings
// @ts-ignore:
RsiSeries.defaultProps = {
  type: "rsi",
};

Rsi.type = "SeriesChart";
export default Rsi;
