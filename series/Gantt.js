/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "highcharts/es-modules/masters/highcharts-gantt.src.js";
import "highcharts/es-modules/masters/modules/gantt.src.js";
/**
 * A `gantt` series. If the
 * [type](https://api.highcharts.com/gantt/series.gantt.type) option is not
 * specified, it is inherited from
 * [chart.type](https://api.highcharts.com/gantt/chart.type).
 *
 * A ready-made chart with `chart.type` set to `gantt`. Declare the data with
 * `<Gantt.Series>`, or use `GanttSeries` inside a plain `<GanttChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Gantt.
 *
 * @example
 * <Gantt>
 *   <Gantt.Series data={[1, 2, 3]} />
 * </Gantt>
 *
 * @see https://api.highcharts.com/gantt/plotOptions.gantt
 */
function Gantt(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "gantt",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "ganttChart", options: chartConfig }, props.children));
}
/**
 * A `gantt` series. If the
 * [type](https://api.highcharts.com/gantt/series.gantt.type) option is not
 * specified, it is inherited from
 * [chart.type](https://api.highcharts.com/gantt/chart.type).
 *
 * Renders the `gantt` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Gantt.
 *
 * @example
 * <GanttChart>
 *   <GanttSeries data={[1, 2, 3]} />
 * </GanttChart>
 *
 * @see https://api.highcharts.com/gantt/series.gantt
 */
export function GanttSeries(_props) {
    return null;
}
GanttSeries.type = "Series";
Gantt.Series = GanttSeries;
GanttSeries._HCReact = {
    type: "Series",
    HCOption: "series.gantt",
    childOption: "series.gantt",
};
Gantt.type = "SeriesChart";
export default Gantt;
