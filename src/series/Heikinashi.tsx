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

import type { SeriesHeikinashiOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/HeikinAshi/HeikinAshiSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Heikinashi series
 */
const Heikinashi = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "heikinashi",
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

interface HeikinashiSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesHeikinashiOptions>;
  children?: React.ReactNode;
}

export function HeikinashiSeries(_props: HeikinashiSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
HeikinashiSeries.type = "Series";
Heikinashi.Series = HeikinashiSeries;

HeikinashiSeries._HCReact = {
  type: "Series",
  HC_Option: "series.heikinashi",
  childOption: "series.heikinashi",
};

// TODO: Fix typings
// @ts-ignore:
HeikinashiSeries.defaultProps = {
  type: "heikinashi",
};

Heikinashi.type = "SeriesChart";
export default Heikinashi;
