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

import type { SeriesCandlestickOptions } from "highcharts/highcharts";
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

// Specified in overrides
import stock_mod from "highcharts/modules/stock";

stock_mod(getHighcharts());

/**
 * Candlestick series
 */
const Candlestick = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      Object.assign(
        {
          chart: { type: "candlestick" },
          plotOptions: { series: { type: "candlestick" } },
        },
        props.options || {}
      ),
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

interface CandlestickSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesCandlestickOptions>;
  children?: React.ReactNode;
}

export function CandlestickSeries(_props: CandlestickSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
CandlestickSeries.type = "Series";
Candlestick.Series = CandlestickSeries;

CandlestickSeries._HCReact = {
  type: "Series",
  HC_Option: "series.candlestick",
  childOption: "series.candlestick",
};

Candlestick.type = "SeriesChart";
export default Candlestick;
