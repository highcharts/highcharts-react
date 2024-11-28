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

import type { SeriesLinearregressionOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegression/LinearRegressionIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Linearregression series
 */
const Linearregression = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "linearregression",
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

interface LinearregressionSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesLinearregressionOptions>;
  children?: React.ReactNode;
}

export function LinearregressionSeries(_props: LinearregressionSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
LinearregressionSeries.type = "Series";
Linearregression.Series = LinearregressionSeries;

LinearregressionSeries._HCReact = {
  type: "Series",
  HC_Option: "series.linearregression",
  childOption: "series.linearregression",
};

// TODO: Fix typings
// @ts-ignore:
LinearregressionSeries.defaultProps = {
  type: "linearregression",
};

Linearregression.type = "SeriesChart";
export default Linearregression;
