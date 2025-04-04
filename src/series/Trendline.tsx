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

import type { SeriesTrendlineOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/TrendLine/TrendLineIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Trendline series
 */
const Trendline = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "trendline",
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

interface TrendlineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTrendlineOptions>;
  children?: React.ReactNode;
}

export function TrendlineSeries(_props: TrendlineSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
TrendlineSeries.type = "Series";
Trendline.Series = TrendlineSeries;

TrendlineSeries._HCReact = {
  type: "Series",
  HC_Option: "series.trendline",
  childOption: "series.trendline",
};

Trendline.type = "SeriesChart";
export default Trendline;
