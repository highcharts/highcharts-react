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

import type { SeriesWindbarbOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Windbarb/WindbarbSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Windbarb series
 */
const Windbarb = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "windbarb",
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

interface WindbarbSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesWindbarbOptions>;
  children?: React.ReactNode;
}

export function WindbarbSeries(_props: WindbarbSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
WindbarbSeries.type = "Series";
Windbarb.Series = WindbarbSeries;

WindbarbSeries._HCReact = {
  type: "Series",
  HC_Option: "series.windbarb",
  childOption: "series.windbarb",
};

// TODO: Fix typings
// @ts-ignore:
WindbarbSeries.defaultProps = {
  type: "windbarb",
};

Windbarb.type = "SeriesChart";
export default Windbarb;
