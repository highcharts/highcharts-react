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

import type { SeriesNetworkgraphOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Networkgraph/NetworkgraphSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Networkgraph series
 */
const Networkgraph = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "networkgraph",
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

interface NetworkgraphSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesNetworkgraphOptions>;
  children?: React.ReactNode;
}

export function NetworkgraphSeries(_props: NetworkgraphSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
NetworkgraphSeries.type = "Series";
Networkgraph.Series = NetworkgraphSeries;

NetworkgraphSeries._HCReact = {
  type: "Series",
  HC_Option: "series.networkgraph",
  childOption: "series.networkgraph",
};

// TODO: Fix typings
// @ts-ignore:
NetworkgraphSeries.defaultProps = {
  type: "networkgraph",
};

Networkgraph.type = "SeriesChart";
export default Networkgraph;
