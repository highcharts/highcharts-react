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

import type { SeriesCandlestickOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

// Specified in overrides
import stock_mod from "highcharts/modules/stock";

stock_mod(Highcharts);

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

// TODO: Fix typings
// @ts-ignore:
CandlestickSeries.defaultProps = {
  type: "candlestick",
};

Candlestick.type = "SeriesChart";
export default Candlestick;
