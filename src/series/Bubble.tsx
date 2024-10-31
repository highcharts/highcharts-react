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

import type { SeriesBubbleOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Bubble/BubbleSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
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
