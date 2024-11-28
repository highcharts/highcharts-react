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

import type { SeriesVariwideOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Variwide/VariwideSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Variwide series
 */
const Variwide = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "variwide",
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

interface VariwideSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVariwideOptions>;
  children?: React.ReactNode;
}

export function VariwideSeries(_props: VariwideSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
VariwideSeries.type = "Series";
Variwide.Series = VariwideSeries;

VariwideSeries._HCReact = {
  type: "Series",
  HC_Option: "series.variwide",
  childOption: "series.variwide",
};

// TODO: Fix typings
// @ts-ignore:
VariwideSeries.defaultProps = {
  type: "variwide",
};

Variwide.type = "SeriesChart";
export default Variwide;
