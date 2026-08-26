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
import "highcharts/es-modules/masters/indicators/indicators.src.js";
import "highcharts/es-modules/masters/indicators/regressions.src.js";
/**
 * Linear regression indicator. This series requires `linkedTo` option to be
 * set.
 *
 * A ready-made chart with `chart.type` set to `linearregression`. Declare the
 * data with `<LinearRegression.Series>`, or use `LinearRegressionSeries`
 * inside a plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <LinearRegression>
 *   <LinearRegression.Series options={{ linkedTo: 'prices' }} />
 * </LinearRegression>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.linearregression
 */
function LinearRegression(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregression",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Linear regression indicator. This series requires `linkedTo` option to be
 * set.
 *
 * Renders the `linearregression` series type inside a chart component. The
 * most common options are available as props, the rest goes through the
 * `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <LinearRegressionSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.linearregression
 */
export function LinearRegressionSeries(_props) {
    return null;
}
LinearRegressionSeries.type = "Series";
LinearRegression.Series = LinearRegressionSeries;
LinearRegressionSeries._HCReact = {
    type: "Series",
    HCOption: "series.linearregression",
    childOption: "series.linearregression",
};
LinearRegression.type = "SeriesChart";
export default LinearRegression;
