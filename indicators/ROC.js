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
import "highcharts/es-modules/masters/indicators/roc.src.js";
/**
 * ROC series
 */
const ROC = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "roc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ROCSeries(_props) {
    return null;
}
ROCSeries.type = "Series";
ROC.Series = ROCSeries;
ROCSeries._HCReact = {
    type: "Series",
    HCOption: "series.roc",
    childOption: "series.roc",
};
ROC.type = "SeriesChart";
export default ROC;
