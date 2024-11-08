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

import type { SeriesFlowmapOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/FlowMap/FlowMapSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Flowmap series
 */
const Flowmap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "flowmap",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart
      title={props.title}
      chartConstructor="mapChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface FlowmapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesFlowmapOptions>;
}

export function FlowmapSeries(_props: FlowmapSeriesProps) {
  return null;
}

FlowmapSeries.type = "Series";
Flowmap.Series = FlowmapSeries;

// TODO: Fix typings
// @ts-ignore:
FlowmapSeries.defaultProps = {
  type: "flowmap",
};

Flowmap.type = "SeriesChart";
export default Flowmap;
