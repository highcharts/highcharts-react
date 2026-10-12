/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "../seriesModules/VWAP.js";
/**
 * Volume Weighted Average Price indicator.
 *
 * A ready-made chart with `chart.type` set to `vwap`. Declare the data with
 * `<VWAP.Series>`, or use `VWAPSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import VWAP from '@highcharts/react/indicators/VWAP';
 *
 * <VWAP>
 *   <VWAP.Series options={{ linkedTo: 'prices' }} />
 * </VWAP>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.vwap
 */
function VWAP(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vwap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Volume Weighted Average Price indicator.
 *
 * Renders the `vwap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { VWAPSeries } from '@highcharts/react/indicators/VWAP';
 *
 * <StockChart>
 *   <VWAPSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.vwap
 */
export function VWAPSeries(_props) {
    return null;
}
VWAPSeries.type = "Series";
VWAP.Series = VWAPSeries;
VWAPSeries._HCReact = {
    type: "Series",
    HCOption: "series.vwap",
    childOption: "series.vwap",
};
VWAP.type = "SeriesChart";
export default VWAP;
