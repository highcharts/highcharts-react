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

import type { SeriesAreasplinerangeOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Areasplinerange series
 */
const Areasplinerange = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "areasplinerange",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface AreasplinerangeSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAreasplinerangeOptions>;
}

export function AreasplinerangeSeries(_props: AreasplinerangeSeriesProps) {
  return null;
}

AreasplinerangeSeries.type = "Series";
Areasplinerange.Series = AreasplinerangeSeries;

// TODO: Fix typings
// @ts-ignore:
AreasplinerangeSeries.defaultProps = {
  type: "areasplinerange",
};

Areasplinerange.type = "SeriesChart";
export default Areasplinerange;
