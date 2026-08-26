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
import "highcharts/es-modules/masters/indicators/disparity-index.src.js";
/**
 * Disparity Index. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `disparityindex`. Declare the
 * data with `<DisparityIndex.Series>`, or use `DisparityIndexSeries` inside a
 * plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <DisparityIndex>
 *   <DisparityIndex.Series options={{ linkedTo: 'prices' }} />
 * </DisparityIndex>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.disparityindex
 */
function DisparityIndex(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "disparityindex",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Disparity Index. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` file.
 *
 * Renders the `disparityindex` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <DisparityIndexSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.disparityindex
 */
export function DisparityIndexSeries(_props) {
    return null;
}
DisparityIndexSeries.type = "Series";
DisparityIndex.Series = DisparityIndexSeries;
DisparityIndexSeries._HCReact = {
    type: "Series",
    HCOption: "series.disparityindex",
    childOption: "series.disparityindex",
};
DisparityIndex.type = "SeriesChart";
export default DisparityIndex;
