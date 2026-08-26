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
 * A bubble series is a three dimensional series type where each point renders
 * an X, Y and Z value. Each points is drawn as a bubble where the position
 * along the X and Y axes mark the X and Y values, and the size of the bubble
 * relates to the Z value.
 *
 * A ready-made chart with `chart.type` set to `bubble`. Declare the data with
 * `<Bubble.Series>`, or use `BubbleSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Bubble>
 *   <Bubble.Series data={[1, 2, 3]} />
 * </Bubble>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.bubble
 */
function Bubble(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bubble",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A bubble series is a three dimensional series type where each point renders
 * an X, Y and Z value. Each points is drawn as a bubble where the position
 * along the X and Y axes mark the X and Y values, and the size of the bubble
 * relates to the Z value.
 *
 * Renders the `bubble` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <BubbleSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.bubble
 */
export function BubbleSeries(_props) {
    return null;
}
BubbleSeries.type = "Series";
Bubble.Series = BubbleSeries;
BubbleSeries._HCReact = {
    type: "Series",
    HCOption: "series.bubble",
    childOption: "series.bubble",
};
Bubble.type = "SeriesChart";
export default Bubble;
