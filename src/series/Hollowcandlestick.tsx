/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-06
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import Highcharts, {
  ICommonAttributes,
  ICommonSeriesAttributes,
  HighchartsNS,
} from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/HollowCandlestick/HollowCandlestickSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Hollowcandlestick series
 */
const Hollowcandlestick = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Highcharts.Options>(
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
      csv={props.csv}
      csvURL={props.csvURL}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

Hollowcandlestick.Series = (_props: ICommonSeriesAttributes) => <></>;

Hollowcandlestick.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Hollowcandlestick.Series.defaultProps = {
  type: "hollowcandlestick",
};

Hollowcandlestick.type = "SeriesChart";
export default Hollowcandlestick;
