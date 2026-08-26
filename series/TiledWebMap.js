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
import "highcharts/es-modules/masters/modules/tiledwebmap.src.js";
/**
 * A tiledwebmap series allows user to display dynamically joined individual
 * images (tiles) and join them together to create a map.
 *
 * A ready-made chart with `chart.type` set to `tiledwebmap`. Declare the data
 * with `<TiledWebMap.Series>`, or use `TiledWebMapSeries` inside a plain
 * `<MapsChart>` to combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <TiledWebMap>
 *   <TiledWebMap.Series />
 * </TiledWebMap>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.tiledwebmap
 */
function TiledWebMap(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "tiledwebmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "mapChart", options: chartConfig }, props.children));
}
/**
 * A tiledwebmap series allows user to display dynamically joined individual
 * images (tiles) and join them together to create a map.
 *
 * Renders the `tiledwebmap` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <TiledWebMapSeries />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.tiledwebmap
 */
export function TiledWebMapSeries(_props) {
    return null;
}
TiledWebMapSeries.type = "Series";
TiledWebMap.Series = TiledWebMapSeries;
TiledWebMapSeries._HCReact = {
    type: "Series",
    HCOption: "series.tiledwebmap",
    childOption: "series.tiledwebmap",
};
TiledWebMap.type = "SeriesChart";
export default TiledWebMap;
