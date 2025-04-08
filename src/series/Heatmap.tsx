/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesHeatmapOptions } from "highcharts/highcharts";
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
 * Heatmap series
 */
const Heatmap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "heatmap",
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

interface HeatmapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesHeatmapOptions>;
  children?: React.ReactNode;
}

export function HeatmapSeries(_props: HeatmapSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
HeatmapSeries.type = "Series";
Heatmap.Series = HeatmapSeries;

HeatmapSeries._HCReact = {
  type: "Series",
  HC_Option: "series.heatmap",
  childOption: "series.heatmap",
};

Heatmap.type = "SeriesChart";
export default Heatmap;
