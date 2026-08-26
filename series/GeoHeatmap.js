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
import "highcharts/es-modules/masters/modules/geoheatmap.src.js";
/**
 * A `geoheatmap` series is a variety of heatmap series, composed into the map
 * projection, where the units are expressed in the latitude and longitude, and
 * individual values contained in a matrix are represented as colors.
 *
 * A ready-made chart with `chart.type` set to `geoheatmap`. Declare the data
 * with `<GeoHeatmap.Series>`, or use `GeoHeatmapSeries` inside a plain
 * `<MapsChart>` to combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <GeoHeatmap>
 *   <GeoHeatmap.Series data={[1, 2, 3]} />
 * </GeoHeatmap>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.geoheatmap
 */
function GeoHeatmap(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "geoheatmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "mapChart", options: chartConfig }, props.children));
}
/**
 * A `geoheatmap` series is a variety of heatmap series, composed into the map
 * projection, where the units are expressed in the latitude and longitude, and
 * individual values contained in a matrix are represented as colors.
 *
 * Renders the `geoheatmap` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <GeoHeatmapSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.geoheatmap
 */
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
