/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesStochasticOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Stochastic/StochasticIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Stochastic series
 */
const Stochastic = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "stochastic",
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

interface StochasticSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesStochasticOptions>;
  children?: React.ReactNode;
}

export function StochasticSeries(_props: StochasticSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
StochasticSeries.type = "Series";
Stochastic.Series = StochasticSeries;

StochasticSeries._HCReact = {
  type: "Series",
  HC_Option: "series.stochastic",
  childOption: "series.stochastic",
};

Stochastic.type = "SeriesChart";
export default Stochastic;
