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
 * The area spline series is an area series where the graph between the points
 * is smoothed into a spline.
 *
 * A ready-made chart with `chart.type` set to `areaspline`. Declare the data
 * with `<AreaSpline.Series>`, or use `AreaSplineSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <AreaSpline>
 *   <AreaSpline.Series data={[1, 2, 3]} />
 * </AreaSpline>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.areaspline
 */
function AreaSpline(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "areaspline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * The area spline series is an area series where the graph between the points
 * is smoothed into a spline.
 *
 * Renders the `areaspline` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <AreaSplineSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.areaspline
 */
export function AreaSplineSeries(_props) {
    return null;
}
AreaSplineSeries.type = "Series";
AreaSpline.Series = AreaSplineSeries;
AreaSplineSeries._HCReact = {
    type: "Series",
    HCOption: "series.areaspline",
    childOption: "series.areaspline",
};
AreaSpline.type = "SeriesChart";
export default AreaSpline;
