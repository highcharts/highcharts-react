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

import type { SeriesGanttOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Gantt/GanttSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Gantt series
 */
const Gantt = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "gantt",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart
      title={props.title}
      chartConstructor="ganttChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface GanttSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesGanttOptions>;
  children?: React.ReactNode;
}

export function GanttSeries(_props: GanttSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
GanttSeries.type = "Series";
Gantt.Series = GanttSeries;

GanttSeries._HCReact = {
  type: "Series",
  HC_Option: "series.gantt",
  childOption: "series.gantt",
};

Gantt.type = "SeriesChart";
export default Gantt;
