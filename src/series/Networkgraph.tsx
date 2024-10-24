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

import type { SeriesNetworkgraphOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Networkgraph/NetworkgraphSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface NetworkgraphSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesNetworkgraphOptions>;
}

export function NetworkgraphSeries(_props: NetworkgraphSeriesProps) {
  return null;
}

NetworkgraphSeries.type = "Series";
Networkgraph.Series = NetworkgraphSeries;

// TODO: Fix typings
// @ts-ignore:
NetworkgraphSeries.defaultProps = {
  type: "networkgraph",
};

Networkgraph.type = "SeriesChart";
export default Networkgraph;
