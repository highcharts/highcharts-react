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
import "highcharts/es-modules/masters/modules/hollowcandlestick.src.js";
/**
 * A hollow candlestick chart is a style of financial chart used to describe
 * price movements over time.
 *
 * A ready-made chart with `chart.type` set to `hollowcandlestick`. Declare the
 * data with `<HollowCandlestick.Series>`, or use `HollowCandlestickSeries`
 * inside a plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <HollowCandlestick>
 *   <HollowCandlestick.Series data={[1, 2, 3]} />
 * </HollowCandlestick>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.hollowcandlestick
 */
function HollowCandlestick(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "hollowcandlestick",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * A hollow candlestick chart is a style of financial chart used to describe
 * price movements over time.
 *
 * Renders the `hollowcandlestick` series type inside a chart component. The
 * most common options are available as props, the rest goes through the
 * `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <HollowCandlestickSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.hollowcandlestick
 */
export function HollowCandlestickSeries(_props) {
    return null;
}
HollowCandlestickSeries.type = "Series";
HollowCandlestick.Series = HollowCandlestickSeries;
HollowCandlestickSeries._HCReact = {
    type: "Series",
    HCOption: "series.hollowcandlestick",
    childOption: "series.hollowcandlestick",
};
HollowCandlestick.type = "SeriesChart";
export default HollowCandlestick;
