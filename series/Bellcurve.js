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
 * A bell curve is an areaspline series which represents the probability
 * density function of the normal distribution. It calculates mean and standard
 * deviation of the base series data and plots the curve according to the
 * calculated parameters.
 *
 * A ready-made chart with `chart.type` set to `bellcurve`. Declare the data
 * with `<Bellcurve.Series>`, or use `BellcurveSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Bellcurve>
 *   <Bellcurve.Series />
 * </Bellcurve>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.bellcurve
 */
function Bellcurve(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bellcurve",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A bell curve is an areaspline series which represents the probability
 * density function of the normal distribution. It calculates mean and standard
 * deviation of the base series data and plots the curve according to the
 * calculated parameters.
 *
 * Renders the `bellcurve` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <BellcurveSeries />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.bellcurve
 */
export function BellcurveSeries(_props) {
    return null;
}
BellcurveSeries.type = "Series";
Bellcurve.Series = BellcurveSeries;
BellcurveSeries._HCReact = {
    type: "Series",
    HCOption: "series.bellcurve",
    childOption: "series.bellcurve",
};
Bellcurve.type = "SeriesChart";
export default Bellcurve;
