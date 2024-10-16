/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesLinearregressioninterceptOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionIntercept/LinearRegressionInterceptIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface LinearregressioninterceptSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesLinearregressioninterceptOptions>;
}

Linearregressionintercept.Series = (
  _props: LinearregressioninterceptSeriesProps
) => <></>;

Linearregressionintercept.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Linearregressionintercept.Series.defaultProps = {
  type: "linearregressionintercept",
};

Linearregressionintercept.type = "SeriesChart";
export default Linearregressionintercept;
