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
import "highcharts/es-modules/masters/modules/tilemap.src.js";
/**
 * A tilemap series is a type of heatmap where the tile shapes are
 * configurable.
 *
 * A ready-made chart with `chart.type` set to `tilemap`. Declare the data with
 * `<Tilemap.Series>`, or use `TilemapSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Tilemap>
 *   <Tilemap.Series data={[1, 2, 3]} />
 * </Tilemap>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.tilemap
 */
function Tilemap(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "tilemap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A tilemap series is a type of heatmap where the tile shapes are
 * configurable.
 *
 * Renders the `tilemap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Chart>
 *   <TilemapSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.tilemap
 */
export function TilemapSeries(_props) {
    return null;
}
TilemapSeries.type = "Series";
Tilemap.Series = TilemapSeries;
TilemapSeries._HCReact = {
    type: "Series",
    HCOption: "series.tilemap",
    childOption: "series.tilemap",
};
Tilemap.type = "SeriesChart";
export default Tilemap;
