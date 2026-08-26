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
import "highcharts/es-modules/masters/indicators/ichimoku-kinko-hyo.src.js";
/**
 * Ichimoku Kinko Hyo (IKH). This series requires `linkedTo` option to be set.
 *
 * A ready-made chart with `chart.type` set to `ikh`. Declare the data with
 * `<IKH.Series>`, or use `IKHSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <IKH>
 *   <IKH.Series options={{ linkedTo: 'prices' }} />
 * </IKH>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.ikh
 */
function IKH(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ikh",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Ichimoku Kinko Hyo (IKH). This series requires `linkedTo` option to be set.
 *
 * Renders the `ikh` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <IKHSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.ikh
 */
export function IKHSeries(_props) {
    return null;
}
IKHSeries.type = "Series";
IKH.Series = IKHSeries;
IKHSeries._HCReact = {
    type: "Series",
    HCOption: "series.ikh",
    childOption: "series.ikh",
};
IKH.type = "SeriesChart";
export default IKH;
