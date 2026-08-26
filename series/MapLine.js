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
 * A mapline series is a special case of the map series where the value colors
 * are applied to the strokes rather than the fills. It can also be used for
 * freeform drawing, like dividers, in the map.
 *
 * A ready-made chart with `chart.type` set to `mapline`. Declare the data with
 * `<MapLine.Series>`, or use `MapLineSeries` inside a plain `<MapsChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapLine>
 *   <MapLine.Series data={[1, 2, 3]} />
 * </MapLine>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.mapline
 */
function MapLine(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "mapChart", options: chartConfig }, props.children));
}
/**
 * A mapline series is a special case of the map series where the value colors
 * are applied to the strokes rather than the fills. It can also be used for
 * freeform drawing, like dividers, in the map.
 *
 * Renders the `mapline` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapLineSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.mapline
 */
export function MapLineSeries(_props) {
    return null;
}
MapLineSeries.type = "Series";
MapLine.Series = MapLineSeries;
MapLineSeries._HCReact = {
    type: "Series",
    HCOption: "series.mapline",
    childOption: "series.mapline",
};
MapLine.type = "SeriesChart";
export default MapLine;
