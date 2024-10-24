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

import type { SeriesStreamgraphOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Streamgraph/StreamgraphSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Streamgraph series
 */
const Streamgraph = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "streamgraph",
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

interface StreamgraphSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesStreamgraphOptions>;
}

export function StreamgraphSeries(_props: StreamgraphSeriesProps) {
  return null;
}

StreamgraphSeries.type = "Series";
Streamgraph.Series = StreamgraphSeries;

// TODO: Fix typings
// @ts-ignore:
StreamgraphSeries.defaultProps = {
  type: "streamgraph",
};

Streamgraph.type = "SeriesChart";
export default Streamgraph;
