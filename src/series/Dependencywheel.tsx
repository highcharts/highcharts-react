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

import type { SeriesDependencywheelOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/DependencyWheel/DependencyWheelSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Dependencywheel series
 */
const Dependencywheel = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "dependencywheel",
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

interface DependencywheelSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesDependencywheelOptions>;
  children?: React.ReactNode;
}

export function DependencywheelSeries(_props: DependencywheelSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
DependencywheelSeries.type = "Series";
Dependencywheel.Series = DependencywheelSeries;

DependencywheelSeries._HCReact = {
  type: "Series",
  HC_Option: "series.dependencywheel",
  childOption: "series.dependencywheel",
};

// TODO: Fix typings
// @ts-ignore:
DependencywheelSeries.defaultProps = {
  type: "dependencywheel",
};

Dependencywheel.type = "SeriesChart";
export default Dependencywheel;
