/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-04-30
 *
 */

import {
  useState,
  React,
  // @ts-ignore
} from "react";

import Highcharts, {
  ICommonAttributes,
  ICommonSeriesAttributes,
  HighchartsNS,
} from "./Highcharts";

import Mod from "highcharts/es-modules/Series/Candlestick/CandlestickSeriesDefaults.js";

// Specified in overrides
import stock_mod from "highcharts/modules/stock";

Mod(HighchartsNS);

stock_mod(HighchartsNS);

/**
 * Candlestick series
 */
const Candlestick = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Highcharts.Options>(
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
      csv={props.csv}
      csvURL={props.csvURL}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

Candlestick.Series = (_props: ICommonSeriesAttributes) => <></>;

// TODO: Fix typings
// @ts-ignore:
Candlestick.Series.defaultProps = {
  type: "candlestick",
};

export default Candlestick;
