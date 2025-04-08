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

import type { SeriesVariablepieOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/variablepie.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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

Variablepie.type = "SeriesChart";
export default Variablepie;
