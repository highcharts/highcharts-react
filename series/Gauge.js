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
 * Gauges are circular plots displaying one or more values with a dial pointing
 * to values along the perimeter.
 *
 * A ready-made chart with `chart.type` set to `gauge`. Declare the data with
 * `<Gauge.Series>`, or use `GaugeSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Gauge>
 *   <Gauge.Series data={[1, 2, 3]} />
 * </Gauge>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.gauge
 */
function Gauge(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "gauge",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * Gauges are circular plots displaying one or more values with a dial pointing
 * to values along the perimeter.
 *
 * Renders the `gauge` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <GaugeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.gauge
 */
export function GaugeSeries(_props) {
    return null;
}
GaugeSeries.type = "Series";
Gauge.Series = GaugeSeries;
GaugeSeries._HCReact = {
    type: "Series",
    HCOption: "series.gauge",
    childOption: "series.gauge",
};
Gauge.type = "SeriesChart";
export default Gauge;
