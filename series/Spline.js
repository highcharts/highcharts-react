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
 * A spline series is a special type of line series, where the segments between
 * the data points are smoothed.
 *
 * A ready-made chart with `chart.type` set to `spline`. Declare the data with
 * `<Spline.Series>`, or use `SplineSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Spline>
 *   <Spline.Series data={[1, 2, 3]} />
 * </Spline>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.spline
 */
function Spline(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "spline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A spline series is a special type of line series, where the segments between
 * the data points are smoothed.
 *
 * Renders the `spline` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <SplineSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.spline
 */
export function SplineSeries(_props) {
    return null;
}
SplineSeries.type = "Series";
Spline.Series = SplineSeries;
SplineSeries._HCReact = {
    type: "Series",
    HCOption: "series.spline",
    childOption: "series.spline",
};
Spline.type = "SeriesChart";
export default Spline;
