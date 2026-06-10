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
/**
 * Map series
 */
const Map = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "map",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MapSeries(_props) {
    return null;
}
MapSeries.type = "Series";
Map.Series = MapSeries;
MapSeries._HCReact = {
    type: "Series",
    HCOption: "series.map",
    childOption: "series.map",
};
Map.type = "SeriesChart";
export default Map;
