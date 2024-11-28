/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesPackedbubbleOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/PackedBubble/PackedBubbleSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Packedbubble series
 */
const Packedbubble = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "packedbubble",
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

interface PackedbubbleSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPackedbubbleOptions>;
  children?: React.ReactNode;
}

export function PackedbubbleSeries(_props: PackedbubbleSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
PackedbubbleSeries.type = "Series";
Packedbubble.Series = PackedbubbleSeries;

PackedbubbleSeries._HCReact = {
  type: "Series",
  HC_Option: "series.packedbubble",
  childOption: "series.packedbubble",
};

// TODO: Fix typings
// @ts-ignore:
PackedbubbleSeries.defaultProps = {
  type: "packedbubble",
};

Packedbubble.type = "SeriesChart";
export default Packedbubble;
