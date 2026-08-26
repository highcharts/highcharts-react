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
import "highcharts/es-modules/masters/indicators/psar.src.js";
/**
 * Parabolic SAR. This series requires `linkedTo` option to be set and should
 * be loaded after `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `psar`. Declare the data with
 * `<PSAR.Series>`, or use `PSARSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <PSAR>
 *   <PSAR.Series options={{ linkedTo: 'prices' }} />
 * </PSAR>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.psar
 */
function PSAR(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "psar",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Parabolic SAR. This series requires `linkedTo` option to be set and should
 * be loaded after `stock/indicators/indicators.js` file.
 *
 * Renders the `psar` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <PSARSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.psar
 */
export function PSARSeries(_props) {
    return null;
}
PSARSeries.type = "Series";
PSAR.Series = PSARSeries;
PSARSeries._HCReact = {
    type: "Series",
    HCOption: "series.psar",
    childOption: "series.psar",
};
PSAR.type = "SeriesChart";
export default PSAR;
