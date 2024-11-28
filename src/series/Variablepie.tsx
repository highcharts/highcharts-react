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

import type { SeriesVariablepieOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/VariablePie/VariablePieSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Variablepie series
 */
const Variablepie = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "variablepie",
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

interface VariablepieSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVariablepieOptions>;
  children?: React.ReactNode;
}

export function VariablepieSeries(_props: VariablepieSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
VariablepieSeries.type = "Series";
Variablepie.Series = VariablepieSeries;

VariablepieSeries._HCReact = {
  type: "Series",
  HC_Option: "series.variablepie",
  childOption: "series.variablepie",
};

// TODO: Fix typings
// @ts-ignore:
VariablepieSeries.defaultProps = {
  type: "variablepie",
};

Variablepie.type = "SeriesChart";
export default Variablepie;
