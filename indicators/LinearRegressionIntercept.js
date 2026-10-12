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
import "../seriesModules/LinearRegressionIntercept.js";
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
 * import LinearRegressionIntercept from '@highcharts/react/indicators/LinearRegressionIntercept';
 *
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
 * import { StockChart } from '@highcharts/react/Stock';
 * import { LinearRegressionInterceptSeries } from '@highcharts/react/indicators/LinearRegressionIntercept';
 *
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
