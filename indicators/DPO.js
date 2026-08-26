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
import "highcharts/es-modules/masters/indicators/dpo.src.js";
/**
 * Detrended Price Oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `dpo`. Declare the data with
 * `<DPO.Series>`, or use `DPOSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <DPO>
 *   <DPO.Series options={{ linkedTo: 'prices' }} />
 * </DPO>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.dpo
 */
function DPO(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dpo",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Detrended Price Oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `dpo` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <DPOSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.dpo
 */
export function DPOSeries(_props) {
    return null;
}
DPOSeries.type = "Series";
DPO.Series = DPOSeries;
DPOSeries._HCReact = {
    type: "Series",
    HCOption: "series.dpo",
    childOption: "series.dpo",
};
DPO.type = "SeriesChart";
export default DPO;
