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
import "highcharts/es-modules/masters/indicators/indicators.src.js";
import "highcharts/es-modules/masters/indicators/vwap.src.js";
/**
 * VWAP series
 */
const VWAP = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vwap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
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
