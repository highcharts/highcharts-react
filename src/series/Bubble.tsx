/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesBubbleOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/bubble.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
  children?: React.ReactNode;
}

export function BubbleSeries(_props: BubbleSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
BubbleSeries.type = "Series";
Bubble.Series = BubbleSeries;

BubbleSeries._HCReact = {
  type: "Series",
  HC_Option: "series.bubble",
  childOption: "series.bubble",
};

Bubble.type = "SeriesChart";
export default Bubble;
