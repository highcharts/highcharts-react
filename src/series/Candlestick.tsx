/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesCandlestickOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

// Specified in overrides
import stock_mod from "highcharts/modules/stock";

stock_mod(HighchartsNS);

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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface CandlestickSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesCandlestickOptions>;
}

Candlestick.Series = (_props: CandlestickSeriesProps) => <></>;

Candlestick.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Candlestick.Series.defaultProps = {
  type: "candlestick",
};

Candlestick.type = "SeriesChart";
export default Candlestick;
