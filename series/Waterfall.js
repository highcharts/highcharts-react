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
import "highcharts/es-modules/masters/highcharts-more.src.js";
/**
 * Waterfall series
 */
const Waterfall = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "waterfall",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, chartConstructor: "chart", options: chartConfig }, props.children));
};
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
