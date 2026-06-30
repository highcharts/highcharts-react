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
import "highcharts/es-modules/masters/indicators/ao.src.js";
/**
 * AO series
 */
const AO = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ao",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AOSeries(_props) {
    return null;
}
AOSeries.type = "Series";
AO.Series = AOSeries;
AOSeries._HCReact = {
    type: "Series",
    HCOption: "series.ao",
    childOption: "series.ao",
};
AO.type = "SeriesChart";
export default AO;
