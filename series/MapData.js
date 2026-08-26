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
 * A ready-made chart with `chart.type` set to `mapdata`. Declare the data with
 * `<MapData.Series>`, or use `MapDataSeries` inside a plain `<MapsChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapData>
 *   <MapData.Series />
 * </MapData>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.mapdata
 */
function MapData(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapdata",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "mapChart", options: chartConfig }, props.children));
}
/**
 * Renders the `mapdata` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapDataSeries />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.mapdata
 */
export function MapDataSeries(_props) {
    return null;
}
MapDataSeries.type = "Series";
MapData.Series = MapDataSeries;
MapDataSeries._HCReact = {
    type: "Series",
    HCOption: "series.mapdata",
    childOption: "series.mapdata",
};
MapData.type = "SeriesChart";
export default MapData;
