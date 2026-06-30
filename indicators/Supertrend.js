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
import "highcharts/es-modules/masters/indicators/supertrend.src.js";
/**
 * Supertrend series
 */
const Supertrend = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "supertrend",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function SupertrendSeries(_props) {
    return null;
}
SupertrendSeries.type = "Series";
Supertrend.Series = SupertrendSeries;
SupertrendSeries._HCReact = {
    type: "Series",
    HCOption: "series.supertrend",
    childOption: "series.supertrend",
};
Supertrend.type = "SeriesChart";
export default Supertrend;
