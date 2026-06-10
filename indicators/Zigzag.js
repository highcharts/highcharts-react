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
import "highcharts/es-modules/masters/indicators/indicators.src.js";
import "highcharts/es-modules/masters/indicators/zigzag.src.js";
/**
 * Zigzag series
 */
const Zigzag = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "zigzag",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ZigzagSeries(_props) {
    return null;
}
ZigzagSeries.type = "Series";
Zigzag.Series = ZigzagSeries;
ZigzagSeries._HCReact = {
    type: "Series",
    HCOption: "series.zigzag",
    childOption: "series.zigzag",
};
Zigzag.type = "SeriesChart";
export default Zigzag;
