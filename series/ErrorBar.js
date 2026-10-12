/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "../seriesModules/ErrorBar.js";
/**
 * Error bars are a graphical representation of the variability of data and are
 * used on graphs to indicate the error, or uncertainty in a reported
 * measurement.
 *
 * A ready-made chart with `chart.type` set to `errorbar`. Declare the data
 * with `<ErrorBar.Series>`, or use `ErrorBarSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * import ErrorBar from '@highcharts/react/series/ErrorBar';
 *
 * <ErrorBar>
 *   <ErrorBar.Series data={[1, 2, 3]} />
 * </ErrorBar>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.errorbar
 */
function ErrorBar(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "errorbar",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * Error bars are a graphical representation of the variability of data and are
 * used on graphs to indicate the error, or uncertainty in a reported
 * measurement.
 *
 * Renders the `errorbar` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * import { Chart } from '@highcharts/react';
 * import { ErrorBarSeries } from '@highcharts/react/series/ErrorBar';
 *
 * <Chart>
 *   <ErrorBarSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.errorbar
 */
export function ErrorBarSeries(_props) {
    return null;
}
ErrorBarSeries.type = "Series";
ErrorBar.Series = ErrorBarSeries;
ErrorBarSeries._HCReact = {
    type: "Series",
    HCOption: "series.errorbar",
    childOption: "series.errorbar",
};
ErrorBar.type = "SeriesChart";
export default ErrorBar;
