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

import type { SeriesAreasplinerangeOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
  children?: React.ReactNode;
}

export function AreasplinerangeSeries(_props: AreasplinerangeSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
AreasplinerangeSeries.type = "Series";
Areasplinerange.Series = AreasplinerangeSeries;

AreasplinerangeSeries._HCReact = {
  type: "Series",
  HC_Option: "series.areasplinerange",
  childOption: "series.areasplinerange",
};

Areasplinerange.type = "SeriesChart";
export default Areasplinerange;
