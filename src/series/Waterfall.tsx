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

import type { SeriesWaterfallOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Waterfall/WaterfallSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface WaterfallSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesWaterfallOptions>;
}

export function WaterfallSeries(_props: WaterfallSeriesProps) {
  return null;
}

WaterfallSeries.type = "Series";
Waterfall.Series = WaterfallSeries;

// TODO: Fix typings
// @ts-ignore:
WaterfallSeries.defaultProps = {
  type: "waterfall",
};

Waterfall.type = "SeriesChart";
export default Waterfall;
