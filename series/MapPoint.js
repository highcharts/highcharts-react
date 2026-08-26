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
 * A mappoint series is a special form of scatter series where the points can
 * be laid out in map coordinates on top of a map.
 *
 * A ready-made chart with `chart.type` set to `mappoint`. Declare the data
 * with `<MapPoint.Series>`, or use `MapPointSeries` inside a plain
 * `<MapsChart>` to combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapPoint>
 *   <MapPoint.Series data={[1, 2, 3]} />
 * </MapPoint>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.mappoint
 */
function MapPoint(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mappoint",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "mapChart", options: chartConfig }, props.children));
}
/**
 * A mappoint series is a special form of scatter series where the points can
 * be laid out in map coordinates on top of a map.
 *
 * Renders the `mappoint` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapPointSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.mappoint
 */
export function MapPointSeries(_props) {
    return null;
}
MapPointSeries.type = "Series";
MapPoint.Series = MapPointSeries;
MapPointSeries._HCReact = {
    type: "Series",
    HCOption: "series.mappoint",
    childOption: "series.mappoint",
};
MapPoint.type = "SeriesChart";
export default MapPoint;
