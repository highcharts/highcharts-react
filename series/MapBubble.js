/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
/**
 * A map bubble series is a bubble series laid out on top of a map series,
 * where each bubble is tied to a specific map area.
 *
 * A ready-made chart with `chart.type` set to `mapbubble`. Declare the data
 * with `<MapBubble.Series>`, or use `MapBubbleSeries` inside a plain
 * `<MapsChart>` to combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapBubble>
 *   <MapBubble.Series data={[1, 2, 3]} />
 * </MapBubble>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.mapbubble
 */
function MapBubble(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapbubble",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "mapChart", options: chartConfig }, props.children));
}
/**
 * A map bubble series is a bubble series laid out on top of a map series,
 * where each bubble is tied to a specific map area.
 *
 * Renders the `mapbubble` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapBubbleSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.mapbubble
 */
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
