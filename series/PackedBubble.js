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
import "highcharts/es-modules/masters/highcharts-more.src.js";
/**
 * A packed bubble series is a two dimensional series type, where each point
 * renders a value in X, Y position. Each point is drawn as a bubble where the
 * bubbles don't overlap with each other and the radius of the bubble relates
 * to the value.
 *
 * A ready-made chart with `chart.type` set to `packedbubble`. Declare the data
 * with `<PackedBubble.Series>`, or use `PackedBubbleSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <PackedBubble>
 *   <PackedBubble.Series data={[1, 2, 3]} />
 * </PackedBubble>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.packedbubble
 */
function PackedBubble(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "packedbubble",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A packed bubble series is a two dimensional series type, where each point
 * renders a value in X, Y position. Each point is drawn as a bubble where the
 * bubbles don't overlap with each other and the radius of the bubble relates
 * to the value.
 *
 * Renders the `packedbubble` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <PackedBubbleSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.packedbubble
 */
export function PackedBubbleSeries(_props) {
    return null;
}
PackedBubbleSeries.type = "Series";
PackedBubble.Series = PackedBubbleSeries;
PackedBubbleSeries._HCReact = {
    type: "Series",
    HCOption: "series.packedbubble",
    childOption: "series.packedbubble",
};
PackedBubble.type = "SeriesChart";
export default PackedBubble;
