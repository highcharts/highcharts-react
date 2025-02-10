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

import type { SeriesStreamgraphOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Streamgraph/StreamgraphSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface StreamgraphSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesStreamgraphOptions>;
  children?: React.ReactNode;
}

export function StreamgraphSeries(_props: StreamgraphSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
StreamgraphSeries.type = "Series";
Streamgraph.Series = StreamgraphSeries;

StreamgraphSeries._HCReact = {
  type: "Series",
  HC_Option: "series.streamgraph",
  childOption: "series.streamgraph",
};

Streamgraph.type = "SeriesChart";
export default Streamgraph;
