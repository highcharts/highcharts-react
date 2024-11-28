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

import type { SeriesLollipopOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Lollipop/LollipopSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Lollipop series
 */
const Lollipop = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "lollipop",
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

interface LollipopSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesLollipopOptions>;
  children?: React.ReactNode;
}

export function LollipopSeries(_props: LollipopSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
LollipopSeries.type = "Series";
Lollipop.Series = LollipopSeries;

LollipopSeries._HCReact = {
  type: "Series",
  HC_Option: "series.lollipop",
  childOption: "series.lollipop",
};

// TODO: Fix typings
// @ts-ignore:
LollipopSeries.defaultProps = {
  type: "lollipop",
};

Lollipop.type = "SeriesChart";
export default Lollipop;
