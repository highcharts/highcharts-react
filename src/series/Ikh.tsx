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

import type { SeriesIkhOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/ikh.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Ikh series
 */
const Ikh = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "ikh",
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

interface IkhSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesIkhOptions>;
  children?: React.ReactNode;
}

export function IkhSeries(_props: IkhSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
IkhSeries.type = "Series";
Ikh.Series = IkhSeries;

IkhSeries._HCReact = {
  type: "Series",
  HC_Option: "series.ikh",
  childOption: "series.ikh",
};

Ikh.type = "SeriesChart";
export default Ikh;
