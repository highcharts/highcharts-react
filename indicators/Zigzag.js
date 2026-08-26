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
import "highcharts/es-modules/masters/indicators/zigzag.src.js";
/**
 * Zig Zag indicator.
 *
 * A ready-made chart with `chart.type` set to `zigzag`. Declare the data with
 * `<Zigzag.Series>`, or use `ZigzagSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Zigzag>
 *   <Zigzag.Series options={{ linkedTo: 'prices' }} />
 * </Zigzag>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.zigzag
 */
function Zigzag(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "zigzag",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Zig Zag indicator.
 *
 * Renders the `zigzag` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ZigzagSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.zigzag
 */
export function ZigzagSeries(_props) {
    return null;
}
ZigzagSeries.type = "Series";
Zigzag.Series = ZigzagSeries;
ZigzagSeries._HCReact = {
    type: "Series",
    HCOption: "series.zigzag",
    childOption: "series.zigzag",
};
Zigzag.type = "SeriesChart";
export default Zigzag;
