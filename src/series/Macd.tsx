/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesMacdOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/MACD/MACDIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Macd series
 */
const Macd = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "macd",
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

interface MacdSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMacdOptions>;
  children?: React.ReactNode;
}

export function MacdSeries(_props: MacdSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
MacdSeries.type = "Series";
Macd.Series = MacdSeries;

MacdSeries._HCReact = {
  type: "Series",
  HC_Option: "series.macd",
  childOption: "series.macd",
};

Macd.type = "SeriesChart";
export default Macd;
