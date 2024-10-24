/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesParetoOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/ParetoSeries/ParetoSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface ParetoSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesParetoOptions>;
}

export function ParetoSeries(_props: ParetoSeriesProps) {
  return null;
}

ParetoSeries.type = "Series";
Pareto.Series = ParetoSeries;

// TODO: Fix typings
// @ts-ignore:
ParetoSeries.defaultProps = {
  type: "pareto",
};

Pareto.type = "SeriesChart";
export default Pareto;
