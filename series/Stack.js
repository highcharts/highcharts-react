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
 * This option allows grouping series in a stacked chart. The stack option can
 * be a string or anything else, as long as the grouped series' stack options
 * match each other after conversion into a string.
 *
 * A ready-made chart with `chart.type` set to `stack`. Declare the data with
 * `<Stack.Series>`, or use `StackSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Stack>
 *   <Stack.Series />
 * </Stack>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.stack
 */
function Stack(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "stack",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * This option allows grouping series in a stacked chart. The stack option can
 * be a string or anything else, as long as the grouped series' stack options
 * match each other after conversion into a string.
 *
 * Renders the `stack` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <StackSeries />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.stack
 */
export function StackSeries(_props) {
    return null;
}
StackSeries.type = "Series";
Stack.Series = StackSeries;
StackSeries._HCReact = {
    type: "Series",
    HCOption: "series.stack",
    childOption: "series.stack",
};
Stack.type = "SeriesChart";
export default Stack;
