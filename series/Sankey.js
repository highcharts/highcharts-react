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
import "highcharts/es-modules/masters/modules/sankey.src.js";
/**
 * Sankey series
 */
const Sankey = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sankey",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SankeySeries(_props) {
    return null;
}
SankeySeries.type = "Series";
Sankey.Series = SankeySeries;
SankeySeries._HCReact = {
    type: "Series",
    HCOption: "series.sankey",
    childOption: "series.sankey",
};
Sankey.type = "SeriesChart";
export default Sankey;
