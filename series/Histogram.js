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
import "highcharts/es-modules/masters/modules/histogram-bellcurve.src.js";
/**
 * A histogram is a column series which represents the distribution of the data
 * set in the base series. Histogram splits data into bins and shows their
 * frequencies.
 *
 * A ready-made chart with `chart.type` set to `histogram`. Declare the data
 * with `<Histogram.Series>`, or use `HistogramSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Histogram>
 *   <Histogram.Series />
 * </Histogram>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.histogram
 */
function Histogram(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "histogram",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A histogram is a column series which represents the distribution of the data
 * set in the base series. Histogram splits data into bins and shows their
 * frequencies.
 *
 * Renders the `histogram` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <HistogramSeries />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.histogram
 */
export function HistogramSeries(_props) {
    return null;
}
HistogramSeries.type = "Series";
Histogram.Series = HistogramSeries;
HistogramSeries._HCReact = {
    type: "Series",
    HCOption: "series.histogram",
    childOption: "series.histogram",
};
Histogram.type = "SeriesChart";
export default Histogram;
