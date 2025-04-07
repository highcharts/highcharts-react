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

import type { SeriesLinearregressionslopeOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionSlopes/LinearRegressionSlopesIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Linearregressionslope series
 */
const Linearregressionslope = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "linearregressionslope",
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

interface LinearregressionslopeSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesLinearregressionslopeOptions>;
  children?: React.ReactNode;
}

export function LinearregressionslopeSeries(
  _props: LinearregressionslopeSeriesProps
) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
LinearregressionslopeSeries.type = "Series";
Linearregressionslope.Series = LinearregressionslopeSeries;

LinearregressionslopeSeries._HCReact = {
  type: "Series",
  HC_Option: "series.linearregressionslope",
  childOption: "series.linearregressionslope",
};

Linearregressionslope.type = "SeriesChart";
export default Linearregressionslope;
