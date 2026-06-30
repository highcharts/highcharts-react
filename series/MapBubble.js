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
/**
 * MapBubble series
 */
const MapBubble = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapbubble",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MapBubbleSeries(_props) {
    return null;
}
MapBubbleSeries.type = "Series";
MapBubble.Series = MapBubbleSeries;
MapBubbleSeries._HCReact = {
    type: "Series",
    HCOption: "series.mapbubble",
    childOption: "series.mapbubble",
};
MapBubble.type = "SeriesChart";
export default MapBubble;
