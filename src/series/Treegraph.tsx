/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
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

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Treegraph/TreegraphSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
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
