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

import type { SeriesTreegraphOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Treegraph/TreegraphSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Treegraph series
 */
const Treegraph = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "treegraph",
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

interface TreegraphSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTreegraphOptions>;
}

export function TreegraphSeries(_props: TreegraphSeriesProps) {
  return null;
}

TreegraphSeries.type = "Series";
Treegraph.Series = TreegraphSeries;

// TODO: Fix typings
// @ts-ignore:
TreegraphSeries.defaultProps = {
  type: "treegraph",
};

Treegraph.type = "SeriesChart";
export default Treegraph;
