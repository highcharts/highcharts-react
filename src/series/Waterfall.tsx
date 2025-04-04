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

import type { SeriesWaterfallOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Waterfall/WaterfallSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Waterfall series
 */
const Waterfall = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "waterfall",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface WaterfallSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesWaterfallOptions>;
  children?: React.ReactNode;
}

export function WaterfallSeries(_props: WaterfallSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
WaterfallSeries.type = "Series";
Waterfall.Series = WaterfallSeries;

WaterfallSeries._HCReact = {
  type: "Series",
  HC_Option: "series.waterfall",
  childOption: "series.waterfall",
};

Waterfall.type = "SeriesChart";
export default Waterfall;
