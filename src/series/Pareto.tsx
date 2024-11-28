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

import type { SeriesParetoOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ParetoSeries/ParetoSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Pareto series
 */
const Pareto = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "pareto",
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

interface ParetoSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesParetoOptions>;
  children?: React.ReactNode;
}

export function ParetoSeries(_props: ParetoSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ParetoSeries.type = "Series";
Pareto.Series = ParetoSeries;

ParetoSeries._HCReact = {
  type: "Series",
  HC_Option: "series.pareto",
  childOption: "series.pareto",
};

// TODO: Fix typings
// @ts-ignore:
ParetoSeries.defaultProps = {
  type: "pareto",
};

Pareto.type = "SeriesChart";
export default Pareto;
