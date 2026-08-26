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
import "highcharts/es-modules/masters/indicators/roc.src.js";
/**
 * Rate of change indicator (ROC). The indicator value for each point is
 * defined as:
 *
 * A ready-made chart with `chart.type` set to `roc`. Declare the data with
 * `<ROC.Series>`, or use `ROCSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <ROC>
 *   <ROC.Series options={{ linkedTo: 'prices' }} />
 * </ROC>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.roc
 */
function ROC(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "roc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Rate of change indicator (ROC). The indicator value for each point is
 * defined as:
 *
 * Renders the `roc` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ROCSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.roc
 */
export function ROCSeries(_props) {
    return null;
}
ROCSeries.type = "Series";
ROC.Series = ROCSeries;
ROCSeries._HCReact = {
    type: "Series",
    HCOption: "series.roc",
    childOption: "series.roc",
};
ROC.type = "SeriesChart";
export default ROC;
