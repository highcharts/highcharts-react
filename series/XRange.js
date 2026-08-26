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
import "highcharts/es-modules/masters/modules/xrange.src.js";
/**
 * The X-range series displays ranges on the X axis, typically time intervals
 * with a start and end date.
 *
 * A ready-made chart with `chart.type` set to `xrange`. Declare the data with
 * `<XRange.Series>`, or use `XRangeSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock, Highcharts Gantt.
 *
 * @example
 * <XRange>
 *   <XRange.Series data={[1, 2, 3]} />
 * </XRange>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.xrange
 */
function XRange(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "xrange",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * The X-range series displays ranges on the X axis, typically time intervals
 * with a start and end date.
 *
 * Renders the `xrange` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock, Highcharts Gantt.
 *
 * @example
 * <Chart>
 *   <XRangeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.xrange
 */
export function XRangeSeries(_props) {
    return null;
}
XRangeSeries.type = "Series";
XRange.Series = XRangeSeries;
XRangeSeries._HCReact = {
    type: "Series",
    HCOption: "series.xrange",
    childOption: "series.xrange",
};
XRange.type = "SeriesChart";
export default XRange;
