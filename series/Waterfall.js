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
import "highcharts/es-modules/masters/highcharts-more.src.js";
/**
 * A waterfall chart displays sequentially introduced positive or negative
 * values in cumulative columns.
 *
 * A ready-made chart with `chart.type` set to `waterfall`. Declare the data
 * with `<Waterfall.Series>`, or use `WaterfallSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Waterfall>
 *   <Waterfall.Series data={[1, 2, 3]} />
 * </Waterfall>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.waterfall
 */
function Waterfall(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "waterfall",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A waterfall chart displays sequentially introduced positive or negative
 * values in cumulative columns.
 *
 * Renders the `waterfall` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <WaterfallSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.waterfall
 */
export function WaterfallSeries(_props) {
    return null;
}
WaterfallSeries.type = "Series";
Waterfall.Series = WaterfallSeries;
WaterfallSeries._HCReact = {
    type: "Series",
    HCOption: "series.waterfall",
    childOption: "series.waterfall",
};
Waterfall.type = "SeriesChart";
export default Waterfall;
