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
import "highcharts/es-modules/masters/modules/geoheatmap.src.js";
/**
 * GeoHeatmap series
 */
const GeoHeatmap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "geoheatmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function GeoHeatmapSeries(_props) {
    return null;
}
GeoHeatmapSeries.type = "Series";
GeoHeatmap.Series = GeoHeatmapSeries;
GeoHeatmapSeries._HCReact = {
    type: "Series",
    HCOption: "series.geoheatmap",
    childOption: "series.geoheatmap",
};
GeoHeatmap.type = "SeriesChart";
export default GeoHeatmap;
