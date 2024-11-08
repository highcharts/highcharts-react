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

import type { SeriesTreemapOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Treemap/TreemapSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
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
}

export function TreemapSeries(_props: TreemapSeriesProps) {
  return null;
}

TreemapSeries.type = "Series";
Treemap.Series = TreemapSeries;

// TODO: Fix typings
// @ts-ignore:
TreemapSeries.defaultProps = {
  type: "treemap",
};

Treemap.type = "SeriesChart";
export default Treemap;
