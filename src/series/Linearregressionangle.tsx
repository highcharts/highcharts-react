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

import type { SeriesLinearregressionangleOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionAngle/LinearRegressionAngleIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Linearregressionangle series
 */
const Linearregressionangle = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "linearregressionangle",
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

interface LinearregressionangleSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesLinearregressionangleOptions>;
  children?: React.ReactNode;
}

export function LinearregressionangleSeries(
  _props: LinearregressionangleSeriesProps
) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
LinearregressionangleSeries.type = "Series";
Linearregressionangle.Series = LinearregressionangleSeries;

LinearregressionangleSeries._HCReact = {
  type: "Series",
  HC_Option: "series.linearregressionangle",
  childOption: "series.linearregressionangle",
};

// TODO: Fix typings
// @ts-ignore:
LinearregressionangleSeries.defaultProps = {
  type: "linearregressionangle",
};

Linearregressionangle.type = "SeriesChart";
export default Linearregressionangle;
