/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesChaikinOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Chaikin/ChaikinIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Chaikin series
 */
const Chaikin = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "chaikin",
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

interface ChaikinSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesChaikinOptions>;
}

export function ChaikinSeries(_props: ChaikinSeriesProps) {
  return null;
}

ChaikinSeries.type = "Series";
Chaikin.Series = ChaikinSeries;

// TODO: Fix typings
// @ts-ignore:
ChaikinSeries.defaultProps = {
  type: "chaikin",
};

Chaikin.type = "SeriesChart";
export default Chaikin;
