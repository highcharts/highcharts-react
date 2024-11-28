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

import type { SeriesLinearregressioninterceptOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionIntercept/LinearRegressionInterceptIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Linearregressionintercept series
 */
const Linearregressionintercept = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "linearregressionintercept",
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

interface LinearregressioninterceptSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesLinearregressioninterceptOptions>;
  children?: React.ReactNode;
}

export function LinearregressioninterceptSeries(
  _props: LinearregressioninterceptSeriesProps
) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
LinearregressioninterceptSeries.type = "Series";
Linearregressionintercept.Series = LinearregressioninterceptSeries;

LinearregressioninterceptSeries._HCReact = {
  type: "Series",
  HC_Option: "series.linearregressionintercept",
  childOption: "series.linearregressionintercept",
};

// TODO: Fix typings
// @ts-ignore:
LinearregressioninterceptSeries.defaultProps = {
  type: "linearregressionintercept",
};

Linearregressionintercept.type = "SeriesChart";
export default Linearregressionintercept;
