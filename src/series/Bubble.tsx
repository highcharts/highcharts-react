/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesBubbleOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Bubble/BubbleSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Bubble series
 */
const Bubble = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "bubble",
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

interface BubbleSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBubbleOptions>;
}

export function BubbleSeries(_props: BubbleSeriesProps) {
  return null;
}

BubbleSeries.type = "Series";
Bubble.Series = BubbleSeries;

// TODO: Fix typings
// @ts-ignore:
BubbleSeries.defaultProps = {
  type: "bubble",
};

Bubble.type = "SeriesChart";
export default Bubble;
