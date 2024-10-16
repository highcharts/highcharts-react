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

import type { SeriesDependencywheelOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/DependencyWheel/DependencyWheelSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface DependencywheelSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesDependencywheelOptions>;
}

Dependencywheel.Series = (_props: DependencywheelSeriesProps) => <></>;

Dependencywheel.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Dependencywheel.Series.defaultProps = {
  type: "dependencywheel",
};

Dependencywheel.type = "SeriesChart";
export default Dependencywheel;
