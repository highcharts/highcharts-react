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
import "highcharts/es-modules/masters/indicators/rsi.src.js";
/**
 * Relative strength index (RSI) technical indicator. This series requires the
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `rsi`. Declare the data with
 * `<RSI.Series>`, or use `RSISeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <RSI>
 *   <RSI.Series options={{ linkedTo: 'prices' }} />
 * </RSI>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.rsi
 */
function RSI(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "rsi",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Relative strength index (RSI) technical indicator. This series requires the
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file.
 *
 * Renders the `rsi` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <RSISeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.rsi
 */
export function RSISeries(_props) {
    return null;
}
RSISeries.type = "Series";
RSI.Series = RSISeries;
RSISeries._HCReact = {
    type: "Series",
    HCOption: "series.rsi",
    childOption: "series.rsi",
};
RSI.type = "SeriesChart";
export default RSI;
