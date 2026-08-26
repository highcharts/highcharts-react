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
 * A bar series is a special type of column series where the columns are
 * horizontal.
 *
 * A ready-made chart with `chart.type` set to `bar`. Declare the data with
 * `<Bar.Series>`, or use `BarSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Bar>
 *   <Bar.Series data={[1, 2, 3]} />
 * </Bar>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.bar
 */
function Bar(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bar",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A bar series is a special type of column series where the columns are
 * horizontal.
 *
 * Renders the `bar` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <BarSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.bar
 */
export function BarSeries(_props) {
    return null;
}
BarSeries.type = "Series";
Bar.Series = BarSeries;
BarSeries._HCReact = {
    type: "Series",
    HCOption: "series.bar",
    childOption: "series.bar",
};
Bar.type = "SeriesChart";
export default Bar;
