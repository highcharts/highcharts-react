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

import type { SeriesTimelineOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Timeline/TimelineSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Timeline series
 */
const Timeline = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "timeline",
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

interface TimelineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTimelineOptions>;
  children?: React.ReactNode;
}

export function TimelineSeries(_props: TimelineSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
TimelineSeries.type = "Series";
Timeline.Series = TimelineSeries;

TimelineSeries._HCReact = {
  type: "Series",
  HC_Option: "series.timeline",
  childOption: "series.timeline",
};

Timeline.type = "SeriesChart";
export default Timeline;
