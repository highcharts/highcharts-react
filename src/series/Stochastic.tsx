/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesStochasticOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Stochastic/StochasticIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface StochasticSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesStochasticOptions>;
}

export function StochasticSeries(_props: StochasticSeriesProps) {
  return null;
}

StochasticSeries.type = "Series";
Stochastic.Series = StochasticSeries;

// TODO: Fix typings
// @ts-ignore:
StochasticSeries.defaultProps = {
  type: "stochastic",
};

Stochastic.type = "SeriesChart";
export default Stochastic;
