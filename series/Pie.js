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
 * A pie chart is a circular graphic which is divided into slices to illustrate
 * numerical proportion.
 *
 * A ready-made chart with `chart.type` set to `pie`. Declare the data with
 * `<Pie.Series>`, or use `PieSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Pie>
 *   <Pie.Series data={[1, 2, 3]} />
 * </Pie>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.pie
 */
function Pie(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pie",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A pie chart is a circular graphic which is divided into slices to illustrate
 * numerical proportion.
 *
 * Renders the `pie` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Chart>
 *   <PieSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.pie
 */
export function PieSeries(_props) {
    return null;
}
PieSeries.type = "Series";
Pie.Series = PieSeries;
PieSeries._HCReact = {
    type: "Series",
    HCOption: "series.pie",
    childOption: "series.pie",
};
Pie.type = "SeriesChart";
export default Pie;
