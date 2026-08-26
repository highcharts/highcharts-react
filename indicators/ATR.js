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
import "highcharts/es-modules/masters/indicators/atr.src.js";
/**
 * Average true range indicator (ATR). This series requires `linkedTo` option
 * to be set.
 *
 * A ready-made chart with `chart.type` set to `atr`. Declare the data with
 * `<ATR.Series>`, or use `ATRSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <ATR>
 *   <ATR.Series options={{ linkedTo: 'prices' }} />
 * </ATR>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.atr
 */
function ATR(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "atr",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Average true range indicator (ATR). This series requires `linkedTo` option
 * to be set.
 *
 * Renders the `atr` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ATRSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.atr
 */
export function ATRSeries(_props) {
    return null;
}
ATRSeries.type = "Series";
ATR.Series = ATRSeries;
ATRSeries._HCReact = {
    type: "Series",
    HCOption: "series.atr",
    childOption: "series.atr",
};
ATR.type = "SeriesChart";
export default ATR;
