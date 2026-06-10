/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "highcharts/es-modules/masters/modules/sankey.src.js";
import "highcharts/es-modules/masters/modules/dependency-wheel.src.js";
/**
 * DependencyWheel series
 */
const DependencyWheel = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dependencywheel",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function DependencyWheelSeries(_props) {
    return null;
}
DependencyWheelSeries.type = "Series";
DependencyWheel.Series = DependencyWheelSeries;
DependencyWheelSeries._HCReact = {
    type: "Series",
    HCOption: "series.dependencywheel",
    childOption: "series.dependencywheel",
};
DependencyWheel.type = "SeriesChart";
export default DependencyWheel;
