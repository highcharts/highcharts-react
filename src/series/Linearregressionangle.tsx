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

import type { SeriesLinearregressionangleOptions } from "highcharts/highcharts";

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
}

export function LinearregressionangleSeries(
  _props: LinearregressionangleSeriesProps
) {
  return null;
}

LinearregressionangleSeries.type = "Series";
Linearregressionangle.Series = LinearregressionangleSeries;

// TODO: Fix typings
// @ts-ignore:
LinearregressionangleSeries.defaultProps = {
  type: "linearregressionangle",
};

Linearregressionangle.type = "SeriesChart";
export default Linearregressionangle;
