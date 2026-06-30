/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "highcharts/es-modules/masters/highcharts-more.src.js";
/**
 * BoxPlot series
 */
const BoxPlot = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "boxplot",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function BoxPlotSeries(_props) {
    return null;
}
BoxPlotSeries.type = "Series";
BoxPlot.Series = BoxPlotSeries;
BoxPlotSeries._HCReact = {
    type: "Series",
    HCOption: "series.boxplot",
    childOption: "series.boxplot",
};
BoxPlot.type = "SeriesChart";
export default BoxPlot;
