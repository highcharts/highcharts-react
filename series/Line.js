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
/**
 * A line series displays information as a series of data points connected by
 * straight line segments.
 *
 * A ready-made chart with `chart.type` set to `line`. Declare the data with
 * `<Line.Series>`, or use `LineSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Line>
 *   <Line.Series data={[1, 2, 3]} />
 * </Line>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.line
 */
function Line(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "line",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A line series displays information as a series of data points connected by
 * straight line segments.
 *
 * Renders the `line` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <LineSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.line
 */
export function LineSeries(_props) {
    return null;
}
LineSeries.type = "Series";
Line.Series = LineSeries;
LineSeries._HCReact = {
    type: "Series",
    HCOption: "series.line",
    childOption: "series.line",
};
Line.type = "SeriesChart";
export default Line;
