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

import type { SeriesRenkoOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Renko/RenkoSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Renko series
 */
const Renko = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "renko",
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

interface RenkoSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesRenkoOptions>;
  children?: React.ReactNode;
}

export function RenkoSeries(_props: RenkoSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
RenkoSeries.type = "Series";
Renko.Series = RenkoSeries;

RenkoSeries._HCReact = {
  type: "Series",
  HC_Option: "series.renko",
  childOption: "series.renko",
};

// TODO: Fix typings
// @ts-ignore:
RenkoSeries.defaultProps = {
  type: "renko",
};

Renko.type = "SeriesChart";
export default Renko;
