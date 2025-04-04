/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesDumbbellOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Dumbbell/DumbbellSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Dumbbell series
 */
const Dumbbell = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "dumbbell",
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

interface DumbbellSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesDumbbellOptions>;
  children?: React.ReactNode;
}

export function DumbbellSeries(_props: DumbbellSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
DumbbellSeries.type = "Series";
Dumbbell.Series = DumbbellSeries;

DumbbellSeries._HCReact = {
  type: "Series",
  HC_Option: "series.dumbbell",
  childOption: "series.dumbbell",
};

Dumbbell.type = "SeriesChart";
export default Dumbbell;
