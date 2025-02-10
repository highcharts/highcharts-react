/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesPieOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

if (typeof getHighcharts().__provided === "undefined") {
}

/**
 * Pie series
 */
const Pie = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "pie",
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

interface PieSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPieOptions>;
  children?: React.ReactNode;
}

export function PieSeries(_props: PieSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
PieSeries.type = "Series";
Pie.Series = PieSeries;

PieSeries._HCReact = {
  type: "Series",
  HC_Option: "series.pie",
  childOption: "series.pie",
};

Pie.type = "SeriesChart";
export default Pie;
