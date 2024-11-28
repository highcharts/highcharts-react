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

import type { SeriesBbOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/BB/BBIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Bb series
 */
const Bb = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "bb",
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

interface BbSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBbOptions>;
  children?: React.ReactNode;
}

export function BbSeries(_props: BbSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
BbSeries.type = "Series";
Bb.Series = BbSeries;

BbSeries._HCReact = {
  type: "Series",
  HC_Option: "series.bb",
  childOption: "series.bb",
};

// TODO: Fix typings
// @ts-ignore:
BbSeries.defaultProps = {
  type: "bb",
};

Bb.type = "SeriesChart";
export default Bb;
