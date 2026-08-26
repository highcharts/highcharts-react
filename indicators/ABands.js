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
import "highcharts/es-modules/masters/indicators/acceleration-bands.src.js";
/**
 * Acceleration bands (ABANDS). This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `abands`. Declare the data with
 * `<ABands.Series>`, or use `ABandsSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <ABands>
 *   <ABands.Series options={{ linkedTo: 'prices' }} />
 * </ABands>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.abands
 */
function ABands(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "abands",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Acceleration bands (ABANDS). This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `abands` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ABandsSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.abands
 */
export function ABandsSeries(_props) {
    return null;
}
ABandsSeries.type = "Series";
ABands.Series = ABandsSeries;
ABandsSeries._HCReact = {
    type: "Series",
    HCOption: "series.abands",
    childOption: "series.abands",
};
ABands.type = "SeriesChart";
export default ABands;
