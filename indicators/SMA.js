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
/**
 * Simple moving average indicator (SMA). This series requires `linkedTo`
 * option to be set.
 *
 * A ready-made chart with `chart.type` set to `sma`. Declare the data with
 * `<SMA.Series>`, or use `SMASeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <SMA>
 *   <SMA.Series options={{ linkedTo: 'prices' }} />
 * </SMA>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.sma
 */
function SMA(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sma",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Simple moving average indicator (SMA). This series requires `linkedTo`
 * option to be set.
 *
 * Renders the `sma` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <SMASeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.sma
 */
export function SMASeries(_props) {
    return null;
}
SMASeries.type = "Series";
SMA.Series = SMASeries;
SMASeries._HCReact = {
    type: "Series",
    HCOption: "series.sma",
    childOption: "series.sma",
};
SMA.type = "SeriesChart";
export default SMA;
