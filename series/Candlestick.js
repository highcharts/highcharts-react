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
import "highcharts/es-modules/masters/modules/stock.src.js";
/**
 * A candlestick chart is a style of financial chart used to describe price
 * movements over time.
 *
 * A ready-made chart with `chart.type` set to `candlestick`. Declare the data
 * with `<Candlestick.Series>`, or use `CandlestickSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Candlestick>
 *   <Candlestick.Series data={[1, 2, 3]} />
 * </Candlestick>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.candlestick
 */
function Candlestick(props) {
    const [chartConfig] = useState(Object.assign({
        chart: { type: "candlestick" },
        plotOptions: { series: { type: "candlestick" } },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * A candlestick chart is a style of financial chart used to describe price
 * movements over time.
 *
 * Renders the `candlestick` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <CandlestickSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.candlestick
 */
export function CandlestickSeries(_props) {
    return null;
}
CandlestickSeries.type = "Series";
Candlestick.Series = CandlestickSeries;
CandlestickSeries._HCReact = {
    type: "Series",
    HCOption: "series.candlestick",
    childOption: "series.candlestick",
};
Candlestick.type = "SeriesChart";
export default Candlestick;
