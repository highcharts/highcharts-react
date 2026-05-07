/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "highcharts/es-modules/masters/indicators/bollinger-bands.src.js";
/**
 * BB series
 */
const BB = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bb",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function BBSeries(_props) {
    return null;
}
BBSeries.type = "Series";
BB.Series = BBSeries;
BBSeries._HCReact = {
    type: "Series",
    HCOption: "series.bb",
    childOption: "series.bb",
};
BB.type = "SeriesChart";
export default BB;
