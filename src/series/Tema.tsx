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

import type { SeriesTemaOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/TEMA/TEMAIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Tema series
 */
const Tema = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "tema",
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

interface TemaSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTemaOptions>;
  children?: React.ReactNode;
}

export function TemaSeries(_props: TemaSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
TemaSeries.type = "Series";
Tema.Series = TemaSeries;

TemaSeries._HCReact = {
  type: "Series",
  HC_Option: "series.tema",
  childOption: "series.tema",
};

// TODO: Fix typings
// @ts-ignore:
TemaSeries.defaultProps = {
  type: "tema",
};

Tema.type = "SeriesChart";
export default Tema;
