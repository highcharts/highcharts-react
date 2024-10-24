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

import type { SeriesGanttOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Gantt/GanttSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="ganttChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface GanttSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesGanttOptions>;
}

export function GanttSeries(_props: GanttSeriesProps) {
  return null;
}

GanttSeries.type = "Series";
Gantt.Series = GanttSeries;

// TODO: Fix typings
// @ts-ignore:
GanttSeries.defaultProps = {
  type: "gantt",
};

Gantt.type = "SeriesChart";
export default Gantt;
