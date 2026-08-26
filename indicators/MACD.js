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
import "highcharts/es-modules/masters/indicators/macd.src.js";
/**
 * Moving Average Convergence Divergence (MACD). This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `macd`. Declare the data with
 * `<MACD.Series>`, or use `MACDSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <MACD>
 *   <MACD.Series options={{ linkedTo: 'prices' }} />
 * </MACD>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.macd
 */
function MACD(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "macd",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Moving Average Convergence Divergence (MACD). This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * Renders the `macd` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <MACDSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.macd
 */
export function MACDSeries(_props) {
    return null;
}
MACDSeries.type = "Series";
MACD.Series = MACDSeries;
MACDSeries._HCReact = {
    type: "Series",
    HCOption: "series.macd",
    childOption: "series.macd",
};
MACD.type = "SeriesChart";
export default MACD;
