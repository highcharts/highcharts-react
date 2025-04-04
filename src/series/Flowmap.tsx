/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesFlowmapOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/FlowMap/FlowMapSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
  children?: React.ReactNode;
}

export function FlowmapSeries(_props: FlowmapSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
FlowmapSeries.type = "Series";
Flowmap.Series = FlowmapSeries;

FlowmapSeries._HCReact = {
  type: "Series",
  HC_Option: "series.flowmap",
  childOption: "series.flowmap",
};

Flowmap.type = "SeriesChart";
export default Flowmap;
