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

import type { SeriesOhlcOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

if (typeof getHighcharts().__provided === "undefined") {
}

/**
 * Ohlc series
 */
const Ohlc = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "ohlc",
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

interface OhlcSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesOhlcOptions>;
  children?: React.ReactNode;
}

export function OhlcSeries(_props: OhlcSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
OhlcSeries.type = "Series";
Ohlc.Series = OhlcSeries;

OhlcSeries._HCReact = {
  type: "Series",
  HC_Option: "series.ohlc",
  childOption: "series.ohlc",
};

Ohlc.type = "SeriesChart";
export default Ohlc;
