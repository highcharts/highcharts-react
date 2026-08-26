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
import "highcharts/es-modules/masters/modules/timeline.src.js";
/**
 * The timeline series presents given events along a drawn line.
 *
 * A ready-made chart with `chart.type` set to `timeline`. Declare the data
 * with `<Timeline.Series>`, or use `TimelineSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Timeline>
 *   <Timeline.Series data={[1, 2, 3]} />
 * </Timeline>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.timeline
 */
function Timeline(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "timeline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * The timeline series presents given events along a drawn line.
 *
 * Renders the `timeline` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <TimelineSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.timeline
 */
export function TimelineSeries(_props) {
    return null;
}
TimelineSeries.type = "Series";
Timeline.Series = TimelineSeries;
TimelineSeries._HCReact = {
    type: "Series",
    HCOption: "series.timeline",
    childOption: "series.timeline",
};
Timeline.type = "SeriesChart";
export default Timeline;
