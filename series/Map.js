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
 * The map series is used for basic choropleth maps, where each map area has a
 * color based on its value.
 *
 * A ready-made chart with `chart.type` set to `map`. Declare the data with
 * `<Map.Series>`, or use `MapSeries` inside a plain `<MapsChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <Map>
 *   <Map.Series data={[1, 2, 3]} />
 * </Map>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.map
 */
function Map(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "map",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "mapChart", options: chartConfig }, props.children));
}
/**
 * The map series is used for basic choropleth maps, where each map area has a
 * color based on its value.
 *
 * Renders the `map` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.map
 */
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
