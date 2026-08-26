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
 * Linear regression intercept indicator. This series requires `linkedTo`
 * option to be set.
 *
 * A ready-made chart with `chart.type` set to `linearregressionintercept`.
 * Declare the data with `<LinearRegressionIntercept.Series>`, or use
 * `LinearRegressionInterceptSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <LinearRegressionIntercept>
 *   <LinearRegressionIntercept.Series options={{ linkedTo: 'prices' }} />
 * </LinearRegressionIntercept>
 *
 * @see
 * https://api.highcharts.com/highstock/plotOptions.linearregressionintercept
 */
function LinearRegressionIntercept(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregressionintercept",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Linear regression intercept indicator. This series requires `linkedTo`
 * option to be set.
 *
 * Renders the `linearregressionintercept` series type inside a chart
 * component. The most common options are available as props, the rest goes
 * through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <LinearRegressionInterceptSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.linearregressionintercept
 */
export function LinearRegressionInterceptSeries(_props) {
    return null;
}
LinearRegressionInterceptSeries.type = "Series";
LinearRegressionIntercept.Series = LinearRegressionInterceptSeries;
LinearRegressionInterceptSeries._HCReact = {
    type: "Series",
    HCOption: "series.linearregressionintercept",
    childOption: "series.linearregressionintercept",
};
LinearRegressionIntercept.type = "SeriesChart";
export default LinearRegressionIntercept;
