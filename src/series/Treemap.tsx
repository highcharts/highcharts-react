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

import type { SeriesTreemapOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Treemap/TreemapSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Treemap series
 */
const Treemap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "treemap",
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

interface TreemapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTreemapOptions>;
  children?: React.ReactNode;
}

export function TreemapSeries(_props: TreemapSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
TreemapSeries.type = "Series";
Treemap.Series = TreemapSeries;

TreemapSeries._HCReact = {
  type: "Series",
  HC_Option: "series.treemap",
  childOption: "series.treemap",
};

Treemap.type = "SeriesChart";
export default Treemap;
